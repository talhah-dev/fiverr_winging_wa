import { NextResponse } from "next/server";
import { db } from "@/src/db";
import { equipment } from "@/src/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const featuredOnly = searchParams.get("featured") === "true";

    let records;
    if (featuredOnly) {
      records = await db
        .select()
        .from(equipment)
        .where(eq(equipment.featuredOnHome, true))
        .orderBy(desc(equipment.createdAt));
    } else {
      records = await db
        .select()
        .from(equipment)
        .orderBy(desc(equipment.createdAt));
    }

    return NextResponse.json({ success: true, data: records });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const id =
      body.id ||
      body.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const sku =
      body.sku ||
      `WA-${body.brand?.startsWith("AFS") ? "AFS" : "MNT"}-${Math.floor(100 + Math.random() * 900)}`;

    const [inserted] = await db
      .insert(equipment)
      .values({
        id,
        name: body.name,
        brand: body.brand,
        category: body.category,
        price: body.price,
        stockStatus: body.stockStatus || "In Stock (WA)",
        image: body.image || "/equipment/default.jpg",
        description: body.description ?? null,
        featuredOnHome: Boolean(body.featuredOnHome),
        sku,
      })
      .returning();

    return NextResponse.json({ success: true, data: inserted });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    if (!body.id) {
      return NextResponse.json(
        { success: false, error: "Missing equipment ID" },
        { status: 400 }
      );
    }

    const updateData: Partial<typeof equipment.$inferInsert> = {
      updatedAt: new Date(),
    };

    if (body.name !== undefined) updateData.name = body.name;
    if (body.brand !== undefined) updateData.brand = body.brand;
    if (body.category !== undefined) updateData.category = body.category;
    if (body.price !== undefined) updateData.price = body.price;
    if (body.stockStatus !== undefined) updateData.stockStatus = body.stockStatus;
    if (body.image !== undefined) updateData.image = body.image;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.featuredOnHome !== undefined) updateData.featuredOnHome = Boolean(body.featuredOnHome);
    if (body.sku !== undefined) updateData.sku = body.sku;

    const [updated] = await db
      .update(equipment)
      .set(updateData)
      .where(eq(equipment.id, body.id))
      .returning();

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing equipment ID" },
        { status: 400 }
      );
    }

    await db.delete(equipment).where(eq(equipment.id, id));
    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}


import { NextResponse } from "next/server";
import { db } from "@/src/db";
import { contactSubmissions } from "@/src/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET() {
  try {
    const records = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
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
    const id = body.id || `sub-${Date.now().toString()}`;
    const submittedAt =
      body.submittedAt ||
      new Intl.DateTimeFormat("en-AU", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date());

    const [inserted] = await db
      .insert(contactSubmissions)
      .values({
        id,
        name: body.name,
        email: body.email,
        phone: body.phone,
        location: body.location || "Western Australia",
        interest: body.interest,
        category: body.category || "foils",
        message: body.message,
        status: body.status || "new",
        notes: body.notes ?? null,
        submittedAt,
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
        { success: false, error: "Missing submission ID" },
        { status: 400 }
      );
    }

    const updateData: Partial<typeof contactSubmissions.$inferInsert> = {};
    if (body.status !== undefined) updateData.status = body.status;
    if (body.notes !== undefined) updateData.notes = body.notes;

    const [updated] = await db
      .update(contactSubmissions)
      .set(updateData)
      .where(eq(contactSubmissions.id, body.id))
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
        { success: false, error: "Missing submission ID" },
        { status: 400 }
      );
    }

    await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}


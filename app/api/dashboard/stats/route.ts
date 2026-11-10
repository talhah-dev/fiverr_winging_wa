import { NextResponse } from "next/server";
import { db } from "@/src/db";
import { contactSubmissions, equipment, homeYoutubeVideos } from "@/src/db/schema";
import { count, eq, desc, asc } from "drizzle-orm";

export async function GET() {
  try {
    const [totalContactsResult] = await db
      .select({ val: count() })
      .from(contactSubmissions);

    const [newContactsResult] = await db
      .select({ val: count() })
      .from(contactSubmissions)
      .where(eq(contactSubmissions.status, "new"));

    const [totalEquipmentResult] = await db
      .select({ val: count() })
      .from(equipment);

    const [featuredEquipmentResult] = await db
      .select({ val: count() })
      .from(equipment)
      .where(eq(equipment.featuredOnHome, true));

    const [totalYoutubeResult] = await db
      .select({ val: count() })
      .from(homeYoutubeVideos);

    const recentContacts = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(4);

    const featuredEquipment = await db
      .select()
      .from(equipment)
      .where(eq(equipment.featuredOnHome, true))
      .orderBy(desc(equipment.createdAt))
      .limit(4);

    const youtubeSlots = await db
      .select()
      .from(homeYoutubeVideos)
      .orderBy(asc(homeYoutubeVideos.slotNumber));

    return NextResponse.json({
      success: true,
      data: {
        totalContacts: totalContactsResult?.val ?? 0,
        newContacts: newContactsResult?.val ?? 0,
        totalEquipment: totalEquipmentResult?.val ?? 0,
        featuredEquipmentCount: featuredEquipmentResult?.val ?? 0,
        totalYoutube: totalYoutubeResult?.val ?? 0,
        recentContacts,
        featuredEquipment,
        youtubeSlots,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}


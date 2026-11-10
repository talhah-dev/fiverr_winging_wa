import { NextResponse } from "next/server";
import { db } from "@/src/db";
import { homeYoutubeVideos } from "@/src/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET() {
  try {
    const records = await db
      .select()
      .from(homeYoutubeVideos)
      .orderBy(asc(homeYoutubeVideos.slotNumber));
    return NextResponse.json({ success: true, data: records });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const videos = Array.isArray(body) ? body : [body];

    const results = [];
    for (const v of videos) {
      if (!v.slotNumber) continue;

      const [updated] = await db
        .insert(homeYoutubeVideos)
        .values({
          id: v.id || `yt-slot-${v.slotNumber}`,
          slotNumber: Number(v.slotNumber),
          title: v.title,
          youtubeUrl: v.youtubeUrl,
          embedSrc: v.embedSrc,
          videoId: v.videoId,
          description: v.description || "",
          category: v.category || "Community Session",
          updatedAt: new Date(),
        })
        .onConflictDoUpdate({
          target: homeYoutubeVideos.slotNumber,
          set: {
            title: v.title,
            youtubeUrl: v.youtubeUrl,
            embedSrc: v.embedSrc,
            videoId: v.videoId,
            description: v.description || "",
            category: v.category || "Community Session",
            updatedAt: new Date(),
          },
        })
        .returning();

      results.push(updated);
    }

    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}


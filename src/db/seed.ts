import "dotenv/config";
import { db } from "./index";
import { contactSubmissions, equipment, homeYoutubeVideos } from "./schema";
import { initialContactSubmissions } from "../../data/contactSubmissions";
import { initialDashboardEquipment } from "../../data/dashboardEquipment";
import { initialHomeYoutubeVideos } from "../../data/homeYoutubeVideos";

async function seed() {
  try {
    for (const sub of initialContactSubmissions) {
      await db
        .insert(contactSubmissions)
        .values({
          id: sub.id,
          name: sub.name,
          email: sub.email,
          phone: sub.phone,
          location: sub.location,
          interest: sub.interest,
          category: sub.category,
          message: sub.message,
          status: sub.status,
          notes: sub.notes ?? null,
          submittedAt: sub.submittedAt,
        })
        .onConflictDoNothing();
    }

    for (const item of initialDashboardEquipment) {
      await db
        .insert(equipment)
        .values({
          id: item.id,
          name: item.name,
          brand: item.brand,
          category: item.category,
          price: item.price,
          stockStatus: item.stockStatus,
          image: item.image,
          description: item.description ?? null,
          featuredOnHome: item.featuredOnHome,
          sku: item.sku ?? null,
        })
        .onConflictDoNothing();
    }

    for (const video of initialHomeYoutubeVideos) {
      await db
        .insert(homeYoutubeVideos)
        .values({
          id: video.id,
          slotNumber: video.slotNumber,
          title: video.title,
          youtubeUrl: video.youtubeUrl,
          embedSrc: video.embedSrc,
          videoId: video.videoId,
          description: video.description,
          category: video.category,
        })
        .onConflictDoNothing();
    }

    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seed();


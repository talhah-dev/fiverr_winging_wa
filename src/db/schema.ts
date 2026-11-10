import { pgTable, text, boolean, integer, timestamp } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull().default("Western Australia"),
  interest: text("interest").notNull(),
  category: text("category").notNull().default("foils"),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  notes: text("notes"),
  submittedAt: text("submitted_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const equipment = pgTable("equipment", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  brand: text("brand").notNull(),
  category: text("category").notNull(),
  price: text("price").notNull(),
  stockStatus: text("stock_status").notNull(),
  image: text("image").notNull(),
  description: text("description"),
  featuredOnHome: boolean("featured_on_home").default(false).notNull(),
  sku: text("sku"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const homeYoutubeVideos = pgTable("home_youtube_videos", {
  id: text("id").primaryKey(),
  slotNumber: integer("slot_number").notNull().unique(),
  title: text("title").notNull(),
  youtubeUrl: text("youtube_url").notNull(),
  embedSrc: text("embed_src").notNull(),
  videoId: text("video_id").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type NewContactSubmission = typeof contactSubmissions.$inferInsert;

export type EquipmentItem = typeof equipment.$inferSelect;
export type NewEquipmentItem = typeof equipment.$inferInsert;

export type HomeYoutubeVideoRecord = typeof homeYoutubeVideos.$inferSelect;
export type NewHomeYoutubeVideoRecord = typeof homeYoutubeVideos.$inferInsert;


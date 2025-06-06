import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  category: text("category").notNull(),
  condition: text("condition").notNull().default("New"),
  imageUrl: text("image_url").notNull(),
  additionalImages: text("additional_images").array(),
  featured: boolean("featured").default(false),
  discountPrice: integer("discount_price"),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  rating: integer("rating").notNull(),
  review: text("review").notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

export const productReviews = pgTable("product_reviews", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").notNull(),
  name: text("name").notNull(),
  rating: integer("rating").notNull(),
  review: text("review").notNull(),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const insertProductReviewSchema = createInsertSchema(productReviews).omit({
  id: true,
  createdAt: true,
});

export type InsertProductReview = z.infer<typeof insertProductReviewSchema>;
export type ProductReview = typeof productReviews.$inferSelect;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

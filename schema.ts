import { pgTable, text, serial, integer, boolean, timestamp, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
});

export const partners = pgTable("partners", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  partnerUserId: integer("partner_user_id").notNull(),
  status: text("status").notNull().default("pending"), // pending, accepted, blocked
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  accuracy: real("accuracy"),
  batteryLevel: integer("battery_level"),
  speed: real("speed"), // Speed in km/h
  heading: real("heading"), // Direction in degrees
  altitude: real("altitude"), // Altitude in meters
  activity: text("activity"), // "stationary", "walking", "running", "cycling", "driving"
  isLocationSharing: boolean("is_location_sharing").default(true).notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  batteryAlerts: boolean("battery_alerts").default(true).notNull(),
  locationSharing: boolean("location_sharing").default(true).notNull(),
});

export const places = pgTable("places", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  name: text("name").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  radius: integer("radius").default(100), // radius in meters
  alertOnEntry: boolean("alert_on_entry").default(true),
  alertOnExit: boolean("alert_on_exit").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const placeAlerts = pgTable("place_alerts", {
  id: serial("id").primaryKey(),
  placeId: integer("place_id").notNull(),
  userId: integer("user_id").notNull(),
  partnerId: integer("partner_id").notNull(),
  alertType: text("alert_type").notNull(), // "entry" or "exit"
  triggeredAt: timestamp("triggered_at").defaultNow(),
  acknowledged: boolean("acknowledged").default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
});

export const insertPartnerSchema = createInsertSchema(partners).pick({
  userId: true,
  partnerUserId: true,
});

export const insertLocationSchema = createInsertSchema(locations).pick({
  userId: true,
  latitude: true,
  longitude: true,
  accuracy: true,
  batteryLevel: true,
  speed: true,
  heading: true,
  altitude: true,
  activity: true,
  isLocationSharing: true,
});

export const insertSettingsSchema = createInsertSchema(settings).pick({
  userId: true,
  batteryAlerts: true,
  locationSharing: true,
});

export const insertPlaceSchema = createInsertSchema(places).pick({
  userId: true,
  name: true,
  latitude: true,
  longitude: true,
  radius: true,
  alertOnEntry: true,
  alertOnExit: true,
});

export const insertPlaceAlertSchema = createInsertSchema(placeAlerts).pick({
  placeId: true,
  userId: true,
  partnerId: true,
  alertType: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPartner = z.infer<typeof insertPartnerSchema>;
export type Partner = typeof partners.$inferSelect;

export type InsertLocation = z.infer<typeof insertLocationSchema>;
export type Location = typeof locations.$inferSelect;

export type InsertSettings = z.infer<typeof insertSettingsSchema>;
export type Settings = typeof settings.$inferSelect;

export type InsertPlace = z.infer<typeof insertPlaceSchema>;
export type Place = typeof places.$inferSelect;

export type InsertPlaceAlert = z.infer<typeof insertPlaceAlertSchema>;
export type PlaceAlert = typeof placeAlerts.$inferSelect;

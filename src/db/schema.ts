import { relations } from "drizzle-orm";
import { pgTable, varchar, text } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: varchar("id", {
    length: 16,
  })
    .primaryKey()
    .notNull(),
  name: text("name"),
});

export const todo = pgTable("todo", {
  id: varchar("id", {
    length: 16,
  }),
  detail: text("detail"),
  userId: varchar("user_id", {
    length: 16,
  }).references(() => user.id),
});

export const userRelation = relations(user, ({ many }) => ({
  todo: many(todo),
}));

export const todoRelation = relations(todo, ({ one }) => ({
  user: one(user, {
    fields: [todo.userId],
    references: [user.id],
  }),
}));

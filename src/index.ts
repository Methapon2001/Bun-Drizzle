import { nanoid } from "nanoid";
import db from "./db";
import { todo, user } from "./db/schema";
import { InferModel } from "drizzle-orm";

const newUser: InferModel<typeof user, "insert"> = {
  id: nanoid(16),
  name: "Bun Bun!",
};

await db.insert(user).values(newUser);

const newTodo1: InferModel<typeof todo, "insert"> = {
  id: nanoid(16),
  detail: "Bun Bun 1!",
  userId: newUser.id,
};

const newTodo2: InferModel<typeof todo, "insert"> = {
  id: nanoid(16),
  detail: "Bun Bun 2!",
  userId: newUser.id,
};

await db.insert(todo).values(newTodo1);
await db.insert(todo).values(newTodo2);

const result = await db.query.user.findMany({
  with: {
    todo: true,
  },
});

console.log(result);

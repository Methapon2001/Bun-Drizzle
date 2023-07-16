import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.log("No database url provided.");
  process.exit(1);
}

const client = postgres(connectionString, { max: 1 });
const db: PostgresJsDatabase<typeof schema> = drizzle(client, { schema });

export default db;

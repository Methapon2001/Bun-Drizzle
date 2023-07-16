ALTER TABLE "todo" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "detail" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "name" SET NOT NULL;
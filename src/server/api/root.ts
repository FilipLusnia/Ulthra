import { createTRPCRouter } from "~/server/api/trpc";

export type AppRouter = typeof appRouter;
/*
	This is the primary router for your server.
	All routers added in /api/routers should be manually added here.
*/
const appRouter = createTRPCRouter({

});

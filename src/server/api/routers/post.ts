import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

let post = {
	id: 1,
	name: "Hello World",
};

export const postRouter = createTRPCRouter({
	hello: 
		publicProcedure
			.input(z.object({ text: z.string() }))
			.query(q => {
				return { greeting: `Hello ${q.input.text}` }
			}),

	create: 
		protectedProcedure
			.input(z.object({ name: z.string().min(1) }))
			.mutation(async m => {
				// simulate a slow db call
				await new Promise((resolve) => setTimeout(resolve, 1000));
				post = { id: post.id + 1, name: m.input.name };
				return post;
			}),

	getLatest: protectedProcedure.query(() => post),
	
	getSecretMessage: protectedProcedure.query(() => "you can now see this secret message!")
});

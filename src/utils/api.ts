import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import superjson from "superjson";

import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { type AppRouter } from "~/server/api/root";

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

const getBaseUrl = () => {
	if (typeof window !== "undefined") return ""; // browser should use relative url
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${process.env.API_PORT}`; // dev SSR should use localhost
};

/** A set of type-safe react-query hooks for your tRPC API. */
export const api = createTRPCNext<AppRouter>({
	config() {
		return {
			/**
			 * Transformer used for data de-serialization from the server.
			 *
			 * @see https://trpc.io/docs/data-transformers
			 */
			transformer: superjson,

			/**
			 * Links used to determine request flow from client to server.
			 *
			 * @see https://trpc.io/docs/links
			 */
			links: [
				loggerLink({
					enabled: opts => process.env.NODE_ENV === "development" || (opts.direction === "down" && opts.result instanceof Error)
				}),
				httpBatchLink({ url: `${getBaseUrl()}/api/trpc` })
			],
		};
	}
});
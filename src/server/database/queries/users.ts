import { db } from "../config"

export async function getUsers() {
	try {
		return await db
			.selectFrom("users")
			.selectAll()
			.execute();
	} catch (error) {
		return `error getting users: ${error}`;
	}
}
import { db } from "../config"

export async function getUsers() {
	try {
		return await db
			.selectFrom("users")
			.selectAll()
			.execute();
	} catch (error) {
		return `Error getting users: ${error}`;
	}
}
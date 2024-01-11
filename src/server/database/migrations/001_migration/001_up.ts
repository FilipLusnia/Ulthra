import { db } from "../../config";
import { sql } from "kysely";

const fullFileName = new URL(import.meta.url).pathname.split("/").pop()
const filename = fullFileName?.substring(0, fullFileName.indexOf('.'))

export async function up() {
	console.log(`starting migration "${filename}"...`)

	await db.schema
		.createTable('users')
		.addColumn('id', 'uuid', col => col.primaryKey())
		.addColumn('first_name', 'varchar', col => col.notNull())
		.addColumn('email', 'varchar', col => col.notNull())
		.addColumn('created_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
		.execute();

	console.log('migration executed')
}

up()
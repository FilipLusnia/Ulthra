import { db } from "../../config";
import { sql } from "kysely";

const fullFileName = new URL(import.meta.url).pathname.split("/").pop()
const filename = fullFileName?.substring(0, fullFileName.indexOf('.'))

export async function up() {
	console.log(`starting migration "${filename}"...`)

	await db.schema.createTable('users')
		.addColumn('created_at', 'timestamp', col => col.notNull())
		.addColumn('modified_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
		.addColumn('id', 'bigserial', col => col.primaryKey())
		.addColumn('first_name', 'varchar(50)', col => col.notNull())
		.addColumn('last_name', 'varchar(50)', col => col.notNull())
		.addColumn('email', 'varchar(50)', col => col.notNull())
		.addColumn('admin', 'boolean', col => col.notNull().defaultTo(false))
		.execute();

	console.log('migration executed')
}

up()
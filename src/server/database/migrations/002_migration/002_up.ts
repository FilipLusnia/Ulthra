import { db } from "../../config";
import { sql } from "kysely";

const fullFileName = new URL(import.meta.url).pathname.split("/").pop()
const filename = fullFileName?.substring(0, fullFileName.indexOf('.'))

export async function up() {
	console.log(`starting migration "${filename}"...`)

	await db.schema.createTable('products_categories')
		.addColumn('created_at', 'timestamp', col => col.notNull())
		.addColumn('modified_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
		.addColumn('id', 'bigserial', col => col.primaryKey())
		.addColumn('name', 'varchar(50)', col => col.notNull())
		.addColumn('desc', 'varchar', col => col.defaultTo('No description provided.').notNull())
		.execute();

	await db.schema.createTable('products_inventory')
		.addColumn('created_at', 'timestamp', col => col.notNull())
		.addColumn('modified_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
		.addColumn('id', 'bigserial', col => col.primaryKey())
		.addColumn('name', 'varchar(50)', col => col.notNull())
		.addColumn('quantity', 'int4', col => col.defaultTo(0).notNull())
		.execute();

	await db.schema.createTable('products_discounts')
		.addColumn('created_at', 'timestamp', col => col.notNull())
		.addColumn('modified_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
		.addColumn('id', 'bigserial', col => col.primaryKey())
		.addColumn('name', 'varchar(50)', col => col.notNull())
		.addColumn('desc', 'varchar', col => col.defaultTo('No description provided.').notNull())
		.addColumn('percent', 'decimal', col => col.notNull())
		.addColumn('active', 'boolean', col => col.notNull().defaultTo(false))
		.execute();

	await db.schema.createTable('products')
		.addColumn('created_at', 'timestamp', col => col.notNull())
		.addColumn('modified_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
		.addColumn('id', 'bigserial', col => col.primaryKey())
		.addColumn('category_id', 'bigserial', col => col.references('products_categories.id').notNull())
		.addColumn('inventory_id', 'bigserial', col => col.references('products_inventory.id').notNull())
		.addColumn('discount_id', 'bigserial', col => col.references('products_discounts.id'))
		.addColumn('name', 'varchar(50)', col => col.notNull())
		.addColumn('desc', 'varchar', col => col.defaultTo('No description provided.').notNull())
		.execute();

	console.log('migration executed')
}

up()
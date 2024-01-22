import { db } from "../../config";

const fullFileName = new URL(import.meta.url).pathname.split("/").pop()
const filename = fullFileName?.substring(0, fullFileName.indexOf('.'))

export async function down() {
	console.log(`starting migration "${filename}"...`)
	
	await db.schema.dropTable('products').execute();
	await db.schema.dropTable('products_categories').execute();
	await db.schema.dropTable('products_inventory').execute();
	await db.schema.dropTable('products_discounts').execute();
	
	console.log('migration executed')
}

down()
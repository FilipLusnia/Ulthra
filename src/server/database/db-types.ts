import { Generated } from "kysely"

export interface DBTypeIndex {
	users: UsersTable
	products: ProductsTable
	products_categories: ProductsCategoriesTable
	products_inventory: ProductsInventoryTable
	products_discounts: ProductsDiscountsTable
}

//----------------------------
  
export interface UsersTable {
	created_at: Date
	modified_at: Date
	id: Generated<number>
	first_name: string
	last_name: string
	email: string
	admin: 0 | 1
} 

export interface ProductsTable {
	created_at: Date
	modified_at: Date
	id: Generated<number>
	category_id: ProductsCategoriesTable['id']
	inventory_id: ProductsInventoryTable['id']
	name: string
	desc: string
	discount_id: ProductsDiscountsTable['id'] | null;
}

export interface ProductsCategoriesTable {
	created_at: Date
	modified_at: Date
	id: Generated<number>
	name: string
	desc: string
}

export interface ProductsInventoryTable {
	created_at: Date
	modified_at: Date
	id: Generated<number>
	name: string
	quantity: number
}

export interface ProductsDiscountsTable {
	created_at: Date
	modified_at: Date
	id: Generated<number>
	name: string
	desc: string
	percent: number
	active: boolean
}
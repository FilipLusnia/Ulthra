import { Generated } from "kysely"

export interface DBTypeIndex {
	users: UsersTable
}

//----------------------------
  
export interface UsersTable {
	id: Generated<string>
	first_name: string
	email: string
	created_at: Date
}
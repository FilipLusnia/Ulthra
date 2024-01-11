import pg from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import { DBTypeIndex } from './db-types';

if (process.env.DB_NAME === undefined) {
	const dotenv = await import('dotenv');
	dotenv.config()
}

const { Pool } = pg;
const dialect = new PostgresDialect({
	pool: new Pool({
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		port: parseInt(`${process.env.DB_PORT}`)
	})
})

console.info(`launching Kysely instance of "${process.env.DB_NAME}" database`)

export const db = new Kysely<DBTypeIndex>({ dialect })
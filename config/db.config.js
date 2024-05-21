import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg

export const db = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.DATABASE_URL
})

try {
    await db.query('SELECT NOW()')
    console.log('DB conectada')
} catch (error) {
    console.log(error)
}
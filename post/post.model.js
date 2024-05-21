import { db } from '../config/db.config.js'

const findAll = async () => {
    const query = {
        text: `SELECT * FROM posts ORDER BY LIKES DESC`
    }
    const { rows } = await db.query(query)
    return rows
}

const create = async ({ usuario, url, descripcion }) => {
    const query = {
        text: `
        INSERT INTO POSTS (usuario, url, descripcion) VALUES ($1, $2, $3)
        RETURNING *
        `,
        values: [usuario, url, descripcion]
    }
    const { rows } = await db.query(query)
    return rows[0]
}

const update = async (id) => {
    const query = {
        text: `
        UPDATE POSTS
        SET likes = likes + 1
        WHERE id = $1
        RETURNING *
        `,
        values: [id]
    }
    const { rows } = await db.query(query)
    return rows[0]
}


export const PostModel = {
    findAll,
    create,
    update
}
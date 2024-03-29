import { db } from "../config/database.js";

export async function postExist(id){
    return await db.query('SELECT * FROM posts WHERE id = $1;', [id])
}

export async function isReposted(id) {
    return await db.query(`SELECT * FROM posts_shares WHERE id_post = $1;`, [id]);
}
export async function Repost(id, id_user){
    return await db.query('INSERT INTO posts_shares (id_post, id_user) VALUES ($1, $2);', [id, id_user])
}
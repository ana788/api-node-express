import db from '../database/db.js'

const list = async () => {
   return await db.query('SELECT * FROM users')
}

const create = async (user) => {
    const {name, email, pass, avatar} = user
    return await db.query('INSERT INTO users (name, email, pass, avatar) VALUES (?,?,?,?)', [name, email, pass, avatar]) //retorna se deu sucesso ou não
 }

 const get = async (id) => {
   return await db.query('SELECT * FROM users WHERE id = ?;', [id])
 }

 const remove = async (id) => {
   return await db.query('DELETE FROM users WHERE id = ?;', [id]) 
}

const update = async (user) => {
   const {id, name, email, pass, avatar} = user
   return await db.query('UPDATE users SET name = ?, email = ?, pass = ?, avatar = ? WHERE id = ?;', [name, email, pass, avatar, id])
}

export default {list, create, remove, get, update}
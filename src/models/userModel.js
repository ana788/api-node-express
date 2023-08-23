import db from '../database/db.js'

const list = async () => {
   return await db.query('SELECT * FROM users')
}

const create = async (user) => {
    const {name, email, pass} = user
    return await db.query('INSERT INTO users (name, email, pass) VALUES (?,?,?)', [name, email, pass]) //retorna se deu sucesso ou não
 }

 const get = async (id) => {
   return await db.query('SELECT * FROM users WHERE id = ?;', [id])
 }

 const remove = async (id) => {
   return await db.query('DELETE FROM users WHERE id = ?;', [id]) 
}

const update = async (user) => {
   const {id, name, email, pass} = user
   return await db.query('UPDATE users SET name = ?, email = ?, pass = ? WHERE id = ?;', [name, email, pass, id])
}

export default {list, create, remove, get, update}
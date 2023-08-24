import db from '../database/db.js'

const create = async (product) => {
    const {name, categoria, preco, estoque} = product
    return await db.query('INSERT INTO products (name, categoria, preco, estoque) VALUES (?,?,?,?)', [name, categoria, preco, estoque]) //retorna se deu sucesso ou não
 }

 const get = async (id) => {
    return await db.query('SELECT * FROM products WHERE id = ?;', [id])
  }

 export default {create, get}
import db from '../database/db.js'

const create = async (product) => {
    const { name, categoria, preco, estoque } = product
    return await db.query('INSERT INTO products (name, categoria, preco, estoque) VALUES (?,?,?,?)', [name, categoria, preco, estoque]) //retorna se deu sucesso ou não
}

const get = async (id) => {
    return await db.query('SELECT * FROM products WHERE id = ?;', [id])
}

const del = async (id) => {
    return await db.query('DELETE FROM products WHERE id = ?;', [id])
}

const update = async (product) => {
    const {id, name, categoria, preco, estoque} = product
    return await db.query('UPDATE products SET name = ?, categoria = ?, preco = ?, estoque = ? WHERE id = ?;', [name, categoria, preco, estoque, id])
}

const list = async (product) => {
    return await db.query('SELECT * FROM products')
}

export default {create, get, del, update, list}
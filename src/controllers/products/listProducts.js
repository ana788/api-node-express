import product from "../../models/productModel.js"

const listProducts = async (req, res) => {
    try {
        const [rows, fields] = await product.list()
        if (rows.length === 0) {
            res.status(400).json({ message: "No products found" }) //res é a resposta que será dada após a requisição do usuário. O status não é obrigatório.
        } else {
            res.json(rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server Error' })
    }
}

export default listProducts
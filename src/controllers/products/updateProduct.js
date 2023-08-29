import product from "../../models/productModel.js"

const updateProduct = async (req, res) => {
    try {
        const [result] = await product.update(req.body)
        if (result.affectedRows === 1) {
            res.status(200).json({
                sucess: `Produto com id:${req.body.id} atualizado com sucesso`,
                product: {
                    ...req.body
                }
            })
        } else {
            res.status(404).json({
                error: `Produto com id:${req.body.id} não encontrado`,
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
}

export default updateProduct
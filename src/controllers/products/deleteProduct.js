import product from "../../models/productModel.js"

const deleteProduct = async (req, res) => {
    try {
        const id = req.body.id
        const [result] = await product.del(req.body.id)
        console.log(result)
        if(result.affectedRows === 1){
            res.status(200).json({
                sucess: `Product com id = ${id} deletado com sucesso.`
            })
        } else{
            res.status(404).json({
                error: `Product com id = ${id} não encontrado.`
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Server error"})
    }
}

export default deleteProduct
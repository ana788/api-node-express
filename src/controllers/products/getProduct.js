import product from "../../models/productModel.js"

const getProduct = async(req, res) => {
    try {
        const [rows, fields] = await product.get(req.body.id)
        if(rows.length === 0){
            res.status(404).json({
                message: `Produto não encontrado`,
            })
        } else{
            res.json(rows[0])
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Server error"})
    }

}

export default getProduct
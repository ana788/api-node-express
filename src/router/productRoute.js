import express from "express";

import createProduct from "../controllers/products/createProduct.js";
import getProduct from "../controllers/products/getProduct.js"

const router = express.Router();

router.get('/', getProduct)

router.post('/', createProduct)

router.put('/', (req, res) => {
    //Update
    const dadosProdutos = req.body
    res.json({
        message: "Produto atualizado com sucesso",
        dados: dadosProdutos
    })
})

router.delete('/', (req, res) => {
    //Deletar
    res.json({message: "Produto deletado com sucesso"})
})

export default router
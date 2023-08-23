import express from "express";

import createProduct from "../controllers/products/createProduct.js";

const router = express.Router();

router.get('/', (req, res) => { 
    const products = [
        {id: 1, name: "Produto 1"},
        {id: 2, name: "Produto 2"},
        {id: 3, name: "Produto 3"}
    ]
    res.json(products)
})

/*router.post('/', (req, res) => {
    //Create
    const dadosProdutos = req.body
    res.json({
        message: "Produto criado com sucesso",
        dados: dadosProdutos
    })
})*/

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
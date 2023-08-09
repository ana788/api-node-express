import express from "express";

const router = express.Router();

router.get('/', (req, res) => { 
    const products = [
        {id: 1, name: "Produto 1"},
        {id: 2, name: "Produto 2"},
        {id: 3, name: "Produto 3"}
    ]
    res.json(products)
})

router.post('/', (req, res) => {
    //Create
    res.json({message: "Produto criado com sucesso"})
})

router.put('/', (req, res) => {
    //Update
    res.json({message: "Produto atualizado com sucesso"})
})

router.delete('/', (req, res) => {
    //Deletar
    res.json({message: "Produto deletado com sucesso"})
})

export default router
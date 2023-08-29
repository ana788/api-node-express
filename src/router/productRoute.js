import express from "express";

import createProduct from "../controllers/products/createProduct.js";
import getProduct from "../controllers/products/getProduct.js"
import deleteProduct from "../controllers/products/deleteProduct.js"
import updateProduct from "../controllers/products/updateProduct.js"
import listProducts from "../controllers/products/listProducts.js"

const router = express.Router();

router.get('/', getProduct)
router.get('/list', listProducts) //a rota tem de ser diferente, já que é o método GET já está sendo usado na rota '/user'
router.post('/', createProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)


export default router
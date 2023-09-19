import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {PORT} from './config.js'
import logger from './middlewares/logger.js'

import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'


const api = express() //poderiamos usar o app também como nome da variável


api.use(logger) //esta rodando antes de entrar em qualquer rota
api.use(cors())
api.use(bodyParser.json()) //middleware para converter a entrada de dados em json

api.get('/', (req, res) => {
    res.json({message: "Bem vindo à API"})
})

api.use('/user', userRoute)
api.use('/product', productRoute)

api.all('*', logger, (req, res) => { //o middleware pode ser usado em uma funcao em especifico
    //Quando ele não encontrar a rota procurada pelo usuário
    res.status(404).json({message: "Rota não encontrada"})
})


api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
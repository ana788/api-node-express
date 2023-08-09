import express from 'express'
import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'
import {PORT} from './config.js'

const api = express() //poderiamos usar o app também como nome da variável

api.get('/', (req, res) => {
    res.json({message: "Bem vindo à API"})
})

api.use('/user', userRoute)
api.use('/product', productRoute)

api.all('*', (req, res) => {
    //Quando ele não encontrar a rota procurada pelo usuário
    res.status(404).json({message: "Rota não encontrada"})
})


api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
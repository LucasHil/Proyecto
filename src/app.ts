import express from 'express'
import { userRouter } from './users/users.routes.js'

const app = express()
app.use(express.json())

app.use('/api/users', userRouter) //Aca podría haber diferentes lista para diferentes recursos? ej. app.use('/api/productos', userRouter), es decir un nuevo CRUD

app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found'})
})

//---
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/')
})
import express from 'express'
import {placeOrder, placeOrderMercado, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()

//admin
orderRouter.post('/list', adminAuth,allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//Payment
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/mercadopago',authUser, placeOrderMercado)


//user

orderRouter.post('/userorders', authUser, userOrders)


export default orderRouter
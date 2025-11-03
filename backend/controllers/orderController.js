import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';


// global var

const currency = 'ARS'
const deliveryCharge = 10

// Agrega credenciales
const mercadopago = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_SECRET_KEY });

//Placing orders using cash

const placeOrder = async (req, res) =>{
    try{
        const {userId, items, amount, address} = req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "cash",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({success: true, message: "Order Placed"})

    }catch (error){
        console.log(error)
        res.json({success: false, message:error.message})

    }
}



//Placing orders using MercadoPago

const placeOrderMercado = async (req, res) =>{
    try {
        const {userId, items, amount, address} = req.body
        const {origin} = req.headers;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Mercado Pago",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const preferenceItems = items.map((item) => ({
            title: item.name,
            quantity: item.quantity,
            unit_price: item.price,
            currency_id: currency
    }))

    const preference = new Preference(mercadopago);

    const result = await preference.create({
        body:{
            items: preferenceItems,
            back_urls:{
                success: `${process.env.FRONTEND_URL}/payments/success`,
                failure: `${process.env.FRONTEND_URL}/payments/failure`,
                pending: `${process.env.FRONTEND_URL}/payments/pending`
            },
            auto_return: 'approved',
            metadata: {orderId: newOrder._id, userId},
            notification_url: `${process.env.BACKEND_URL}/api/mercado-notifications`
        }
    })

    res.json({success:true, session_url: result.init_point})



    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}
//webhook - (Seguridad)
const mercadoWebhook = async (req, res) => {
  try {
    const paymentId = req.query['data.id']
    if (!paymentId) return res.sendStatus(400)

    const payment = await new Payment(mercadopago).get({ id: paymentId })

    if (payment.status === 'approved') {
      const { orderId, userId } = payment.metadata

      await orderModel.findByIdAndUpdate(orderId, { payment: true })
      await userModel.findByIdAndUpdate(userId, { cartData: {} })
    }

    res.sendStatus(200)
  } catch (error) {
    console.error('Error en webhook:', error)
    res.sendStatus(500)
  }
}

//Orders data for admin 

const allOrders = async (req, res) =>{

    try {
        const orders = await orderModel.find({})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }


}


//User orders data for Front

const userOrders = async (req, res) =>{
    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success: true, orders})

    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

//Update order status
const updateStatus = async (req, res) =>{
    try {
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message:'Status Updated'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

export {placeOrder, placeOrderMercado, allOrders, userOrders, updateStatus}


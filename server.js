require("reflect-metadata")
require('dotenv').config()
const { connect } = require("./app-data-source")
const express = require("express")
const { pizzasRouter } = require("./pizzas/pizza.router")
const { ordersRouter } = require("./orders/order.router")
const app = express()
app.use(express.json())
connect()


app.use("/pizzas", pizzasRouter)
app.use("/orders", ordersRouter)




const port = process.env.PORT || 3000
app.listen(port)
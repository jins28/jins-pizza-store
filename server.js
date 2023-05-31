require("reflect-metadata")
require('dotenv').config()
const { connect } = require("./app-data-source")
const express = require("express")
const { pizzasRouter } = require("./pizzas/pizzas.router")
const { ordersRouter } = require("./orders/order.router")
const { execute } = require("./populate-data/fill-data")
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
connect()


app.use("/pizzas", pizzasRouter)
app.use("/orders", ordersRouter)




const port = process.env.PORT || 3000
app.listen(port)

//execute() -- this was used to fill data, which is done
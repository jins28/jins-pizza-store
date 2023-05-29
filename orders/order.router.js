const ordersRouter = require("express").Router();
const { connect } = require("../app-data-source")
const orderEntity = require("./order.entity")


ordersRouter.get("/", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const orders = await connection.getRepository(orderEntity).find()
        status = 200;
        message = orders;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }
})

ordersRouter.post("/", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const orderData = await connection.getRepository(orderEntity).create(req.body)
        const results = await connection.getRepository(orderEntity).save(orderData)
        status = 200;
        message = results;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }
})
ordersRouter.put("/:id", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const id = request.params.id
        const orderData = await connection.getRepository(orderEntity).create(req.body)
        const results = await connection.getRepository(orderEntity).update({...orderData},{id})
        status = 200;
        message = results;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }

})



ordersRouter.delete("/:id", async (req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        //const id = request.params.id
        const orderData = await connection.getRepository(orderEntity).create(req.body)
        const results = await connection.getRepository(orderEntity).save(orderData)
        status = 200;
        message = results;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }

    
})



module.exports = {
    ordersRouter
}
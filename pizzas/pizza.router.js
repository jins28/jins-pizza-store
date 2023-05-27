const pizzasRouter = require("express").Router();

const pizzaEntity = require("./pizza.entity")

// use query params to limit and for pagination using typeorm
pizzasRouter.get("/:id?perPage=10", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const pizzas = await connection.getRepository(pizzaEntity).find({
            id: req.params.id,
        })
        status = 200;
        message = pizzas;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }
})

pizzasRouter.post("/", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const pizzaData = await connection.getRepository(pizzaEntity).create(req.body)
        const results = await connection.getRepository(pizzaEntity).save(pizzaData)
        status = 200;
        message = results;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }
})
pizzasRouter.put("/:id", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const id = request.params.id
        const pizzaData = await connection.getRepository(pizzaEntity).create(req.body)
        const results = await connection.getRepository(pizzaEntity).update({...pizzaData},{id})
        status = 200;
        message = results;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }

})



pizzasRouter.delete("/:id", async (req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        //const id = request.params.id
        const pizzaData = await connection.getRepository(pizzaEntity).create(req.body)
        const results = await connection.getRepository(pizzaEntity).save(pizzaData)
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
    pizzasRouter
}
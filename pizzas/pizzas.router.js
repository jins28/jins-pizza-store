const pizzasRouter = require("express").Router();
const { connect } = require("../app-data-source")
const pizzasEntity = require("./pizzas.entity")



// use query params to limit and for pagination using typeorm
        //http://localhost:3000/pizzas?page=1&perPage=10
pizzasRouter.get("/", async(req,res)=>{
    let message = "", status;
    try{
        const take = parseInt(req.query.perPage)
        const skip = (parseInt(req.query.page) -1) * take
        
        const connection = await connect()
        let allPizzas = await connection.getRepository(pizzasEntity).find({
             cache:true,
             relations: {
              "pricesAndSizes": true,
            }
        })
        allPizzas = allPizzas.length
       const pizzas = await connection.getRepository(pizzasEntity).find({
            take,
            skip,
            cache:true,
             relations: {
              "pricesAndSizes": true,
            }
        })
        status = 200;
        message = {
            pizzas,
            pizzasCount: allPizzas
        };
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
        const pizzaData = await connection.getRepository(pizzasEntity).create(req.body)
        const results = await connection.getRepository(pizzasEntity).save(pizzaData)
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
        const pizzaData = await connection.getRepository(pizzasEntity).create(req.body)
        const results = await connection.getRepository(pizzasEntity).update({...pizzaData},{id})
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
        const pizzaData = await connection.getRepository(pizzasEntity).create(req.body)
        const results = await connection.getRepository(pizzasEntity).save(pizzaData)
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
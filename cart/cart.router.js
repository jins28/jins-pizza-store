const cartRouter = require("express").Router();
const { connect } = require("../app-data-source")
const cartEntity = require("./cart.entity")
const priceSizeEntity = require("../pizzas-prices-sizes/pizzas-prices-sizes.entity")


cartRouter.get("/:userId", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const userId = req.params.userId
        const cart = await connection.getRepository(cartEntity).find({
          where:{userId }  ,
            
            relations:{
                sizeAndPrices:{
                    pizzas:true,
                }
                
            }
        })  
     
       
        status = 200;
        message = cart;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }
})

cartRouter.post("/", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect() 
		const sizeAndPrice = await connection.getRepository(priceSizeEntity).findOne({
		    where:{
		            id:parseInt(req.body.sizeAndPriceId)
		          },	
		    relations:{
                    "pizzas":true,
                    
		            }
		})
		const cartData ={
            "userId": req.body.userId,
            "status": "New",
            "sizeAndPrices": [sizeAndPrice],
		}
		const cart = await connection.getRepository(cartEntity).create(cartData)
        const results = await connection.getRepository(cartEntity).save(cart)
        status = 200;
        message = results;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }
})
cartRouter.put("/:id", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const id = request.params.id
        const cartData = await connection.getRepository(cartEntity).create(req.body)
        const results = await connection.getRepository(cartEntity).update({...cartData},{id})
        status = 200;
        message = results;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }

})



cartRouter.delete("/:id", async (req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        //const id = request.params.id
        const cartData = await connection.getRepository(cartEntity).create(req.body)
        const results = await connection.getRepository(cartEntity).save(cartData)
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
    cartRouter
}
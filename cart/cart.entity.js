const EntitySchema = require("typeorm").EntitySchema
const sizeOfPizza = ['Small' , 'Medium' , 'Large']
const {cartStatuses}= require("./cart.status.enum")

module.exports =  new EntitySchema({
    name: "cart", 
    tableName: "cart", 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
            
        },
        userId: {
            type: "varchar",
        },
        status:{
            type:"enum",
            enum: cartStatuses,
        },
             
    },
    relations: {
        
        sizeAndPrices:{
             target: "pizzas-prices-sizes",
             type: "many-to-many",   
             joinTable:true,
             cascade:true,
        }
    },
    
})


	
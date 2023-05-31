const EntitySchema = require("typeorm").EntitySchema


module.exports =  new EntitySchema({
    name: "pizzas", 
    tableName: "pizzas", 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
            
        },
        name: {
            type: "varchar",
        },
        
        image:{
            type:"text"
        },
    },
    relations: {
        pricesAndSizes: {
            target: "pizzas-prices-sizes",
            type: "one-to-many",
            inverseSide:"pizzas",
            cascade: true,
        },
    },
},  
)

const EntitySchema = require("typeorm").EntitySchema
const PizzaSize = [ "Small","Medium","Large",]

module.exports =  new EntitySchema({
    name: "price-size", 
    tableName: "price-size", 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
            
        },
        price: {
            type: "float",
        },
		size:{
            type: "enum" ,
            enum: PizzaSize
    },
    },
    relations: {
        pizzas: {
            target: "pizzas",
            type: "many-to-one",
            joinTable: true,
            cascade: true,
        },
        
    },


    },

    
)

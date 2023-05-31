const EntitySchema = require("typeorm").EntitySchema
const { PizzaSizes } = require("./pizzas-sizes.enum")

module.exports =  new EntitySchema({
    name: "pizzas-prices-sizes", 
    tableName: "pizzas-prices-sizes", 
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
            enum: PizzaSizes
    },
    },
    relations: {
        pizzas: {
            target: "pizzas",
            type: "many-to-one",
            nullable:false
        },
    },
})

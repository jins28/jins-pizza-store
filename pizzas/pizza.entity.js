const EntitySchema = require("typeorm").EntitySchema
const PizzaSize = [ "Small","Medium","Large",]

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
        price: {
            type: "float",
        },
        image:{
            type:"text"
        },
        size:{
            type: "enum" ,
            enum: PizzaSize
    },
}
    
})

const EntitySchema = require("typeorm").EntitySchema
const OrderStatus = ['New' , 'Processing' , 'Fulfilled']

module.exports =  new EntitySchema({
    name: "orders", // Will use table name `post` as default behaviour.
    tableName: "orders", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
            
        },
        name: {
            type: "varchar",
        },
        email: {
            type: "varchar",
        },
        status: {
            type: "enum",
            enum: OrderStatus
        },
       
    },
    relations: {
        pizzas: {
            target: "pizzas",
            type: "many-to-many",
            joinTable: true,
            cascade: true,
        },
    },
    
})


	
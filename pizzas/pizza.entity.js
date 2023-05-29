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
        "price-size": {
            target: "price-size",
            type: "one-to-many",
            joinTable: true,
            cascade: true,
        },
      
    },


    },

    
)

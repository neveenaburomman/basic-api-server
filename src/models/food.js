'use strict'
//this file to create a table for food.js
//.definen => is a method in sequelize to create a table insted of having it as a schema
const food =(sequelize,DataTypes)=> sequelize.define('food',{

    typeOfFood :{
    type:DataTypes.STRING,
    allowNull:false 
    },
    priceOfFood :{
    type:DataTypes.STRING,
    }
    
    })
    
    
    module.exports=food;
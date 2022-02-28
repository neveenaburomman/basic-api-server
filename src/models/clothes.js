'use strict'
//this file to create a table for clothes 
const clothes =(sequelize,DataTypes)=> sequelize.define('clothes',{

typeOfClothes :{
type:DataTypes.STRING,
allowNull:false 
},
priceOfClothes :{
type:DataTypes.STRING,
}

})


module.exports=clothes;
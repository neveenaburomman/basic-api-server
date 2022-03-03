'use strict'
//this file is for  preparing the connection between my server and  postgresql server .

// sequelize is a promise-based (all the methods need time),in sequelized we will be able to switch to a different Database system without 
//having to rewrite all your DB queries logic

//A model in Sequelize is basically a representation of a table in 
//your database ,and every model has a name in Sequelize.

//first we install it with the pg(because sequlized uses pg) => npm i sequlized pg , then we require it 

const{Sequelize,DataTypes}=require('sequelize');// return object with two properties 
const dotenv = require("dotenv");
dotenv.config();
const clothes=require('./clothes');
const food =require('./food');



const POSTGRES_URL  = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3
console.log(POSTGRES_URL);
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

const sequelize = new Sequelize(POSTGRES_URL , sequelizeOptions);





module.exports={
    db :sequelize, //for connection ,we will use it the index.js 
    clothes: clothes(sequelize,DataTypes),//for creating the table and we will use it in our routes
    food : food(sequelize,DataTypes)
}




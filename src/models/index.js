'use strict'
//this file is for  preparing the connection between my server and  postgresql server .

// sequelize is a promise-based (all the methods need time),in sequelized we will be able to switch to a different Database system without having to rewrite all your DB queries logic

//A model in Sequelize is basically a representation of a table in 
//your database ,and every model has a name in Sequelize.

//first we install it with the pg(because sequlized uses pg) => npm i sequlized pg , then we require it 

const{Sequelize,DataTypes}=require('sequelize');// return object with two properties 

const clothes=require('./clothes');
const food =require('./food');

const POSTGRES_URL =process.env.DATABASE_URL|| `postgresql://neveen:0000@localhost:5432/firstdatabase`;

let sequelizeOptions = {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);// his will do the actual connection 





module.exports={
    db :sequelize, //for connection ,we will use it the index.js 
    clothes: clothes(sequelize,DataTypes),//for creating the table and we will use it in our routes
    food : food(sequelize,DataTypes)
}




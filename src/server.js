'use strict';
//1st level packages 
const express=require('express');
const cors = require('cors');
const errorhandler=require('./error-handlers/500');
const notfoundpage=require('./error-handlers/404');
const clothesRoutes=require('./routes/clothes.js');
const foodRoutes=require('./routes/food.js');

//local modules
const logger = require('./middleware/logger');

////

const app = express(); 

//global middlewares
app.use(express.json()); //give me the access to the body with json data 
app.use(cors());
app.use(logger);
app.use(clothesRoutes);
app.use(foodRoutes);




app.use('/',(req,res)=>{
    res.send('server is alive')
})



function start (port) {
    app.listen(port ,()=>{
    
        console.log(`i'm listening to ${port}`)
    });
    }


app.use(errorhandler);
app.use('*',notfoundpage);


module.exports = {
    app: app,
    start: start
}


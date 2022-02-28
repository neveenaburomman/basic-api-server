'use strict';

const express=require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());




function start (port) {
app.listen(port ,()=>{

    console.log(`i'm listening to ${port}`)
});
}

app.use('/',(req,res)=>{
    res.send('server is alive')
})

//app('*',notFoundHandler);
//app.use(errorHandler);



module.exports = {
    app: app,
    start: start
}


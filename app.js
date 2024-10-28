const express = require('express')
const dbConnect = require('./config/connection')
require('dotenv').config()
const app = express()
const port = process.env.PORT

dbConnect()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running on ${port}`);
    })
    })
.catch((error)=>{
    console.log(`Server connection lost`,error);
})
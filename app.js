const express = require('express')
const dbConnect = require('./config/connection')
require('dotenv').config()
const app = express()
const port = process.env.PORT

// serving the public folder
app.use(express.static('./public'))

const client = require('./routes/clientRouter')
app.use('/',client)

dbConnect()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running on ${port}`);
    })
    })
.catch((error)=>{
    console.log(`Server connection lost`,error);
})
const mongoose = require('mongoose')

async function dbConnect(){
    await mongoose.connect(process.env.MONGOURL,{
        dbName : 'shiasample'
    })
    .then(()=>{ 
        console.log("Mongodb connected succesfully")
    })
    .catch((error)=>{
        console.error('MongoDB connection failed',error);
     console.log(process.env.MONGOURL)

    })
}

module.exports=dbConnect
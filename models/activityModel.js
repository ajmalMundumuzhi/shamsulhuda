const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    programme : {
        type : String,
        required : true 
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true 
    }
})

const collection = new mongoose.Model("activity",activitySchema)
module.exports= collection
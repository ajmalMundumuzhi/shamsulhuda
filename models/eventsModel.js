const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
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
const collection = new mongoose.Model("events",eventSchema)
module.exports = collection
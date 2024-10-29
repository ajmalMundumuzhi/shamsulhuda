const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventProgramme : {
        type : String,
        required : true
    },
    eventDescription : {
        type : String,
        required : true 
    },
    eventImage : {
        type : String,
        required : true
    }
})
const collection = new mongoose.model("events",eventSchema)
module.exports = collection
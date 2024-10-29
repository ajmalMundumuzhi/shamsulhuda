const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    activityProgramme : {
        type : String,
        required : true 
    },
    activityDescription : {
        type : String,
        required : true
    },
    activityImage : {
        type : String,
        required : true 
    }
})

const collection = new mongoose.model("activity",activitySchema)
module.exports= collection
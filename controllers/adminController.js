const mongoose = require('mongoose')

// latest events and news 
exports.eventPost= (req,res) =>{
    try{
        const eventImage = req.file
    }
    catch(error){
        console.error('Event posting failed :',error)
        res.status(500).send('An error occured while posting the event')
    }
}

// student activities 
exports.activitiesPost = (req,res) => {
    res.render()
}
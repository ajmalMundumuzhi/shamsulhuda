const mongoose = require('mongoose')
const eventDatas = require('../models/eventsModel')
const activityDatas = require('../models/activityModel')

exports.indexGet= async (req,res)=>{
    try{
        const event = await eventDatas.find()
        const activity = await activityDatas.find()

        const details = {
            event : event,
            activity : activity
        }
        res.render('index')
    }
    catch(error) {
        console.log(`Error fetching data : `,error)
        res.status(500).send(`an error occured while fetching data`)
    }
}

exports.eventGet= (req,res)=>{
    res.render()
}

exports.activityGet = (req,res) =>{
    res.render()
}
const express = require('express')
const clientRouter = express()
const clientController = require('../controllers/clientController')

clientRouter.use(express.json())
clientRouter.use(express.urlencoded({ extended: true }));
clientRouter.set('view engine','ejs')
clientRouter.set('views','./views/client')

// client home page (index)
clientRouter.get('/',clientController.indexGet)

module.exports=clientRouter
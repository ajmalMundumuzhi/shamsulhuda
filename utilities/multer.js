const multer = require('multer')

const eventStorage = multer.diskStorage({
    destination : function(req,file,db){
        if(file.fieldname === 'eventImage'){
            cb (null, './public/images/upload/event')
        }
        else{
            cb (null, './public/images/upload/others')
        }
    }
})
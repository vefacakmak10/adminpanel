const mongoose = require('mongoose');



const Schema = mongoose.Schema;
const formSchema=new Schema({
    username: String,
    password: String,
    phone:String,
    acıklama:String,
   
});



const form  = mongoose.model('form',formSchema) ;

module.exports=form ;
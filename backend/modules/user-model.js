const mongoose=require('mongoose')

const userScehma=new mongoose.Schema({
    "name":String,
    "email":String,
    "password":String,
})

const Usermodel=mongoose.model('/users',userScehma)

module.exports=Usermodel
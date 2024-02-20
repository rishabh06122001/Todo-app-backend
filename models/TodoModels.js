const mongoose=require('mongoose')

const todoSchhema=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('Todo',todoSchhema)
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
    
})
module.exports = mongoose.model("todo",todoSchema)
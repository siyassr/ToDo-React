
const TodoModel = require("../models/todo")

exports.createTodo = async(req,res)=>{
    try {
        console.log("userrrr")
        const{task,description} = req.body
        const Task  = new TodoModel({task:task,description:description})
        await Task.save()
     } catch (error) {
         res.status(400).send(error.message)
     }
}
exports.getTodo = async(req,res)=>{
    TodoModel.find()
    .then(result=> res.json(result))
    .catch(err=> res.json(err))
}

exports.Update = async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}
exports.delete = async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}
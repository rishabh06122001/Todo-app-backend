const TodoModel= require('../models/TodoModels')


// get the data from todo
module.exports.getTodo =async(req,res)=>{
    try{
        const toDo= await TodoModel.find()
        res.send(toDo);
    }
    catch(error){
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// saving the data from todo
module.exports.saveTodo=async (req,res)=>{
    try{
        const {text}=req.body;
        const newTodo=await TodoModel.create({text});
        console.log("Data Added:",newTodo);
        res.status(201).send(newTodo);
    }
    catch(error){
        console.error('Error saving todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports.updateTodo=async (req,res)=>{
    const {_id, text}=req.body
    TodoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("update successfully"))
    .catch((err)=>console.log(err))
}

module.exports.deleteTodo=async (req,res)=>{
    const {_id}=req.body
    TodoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted successfully"))
    .catch((err)=>console.log(err))
}

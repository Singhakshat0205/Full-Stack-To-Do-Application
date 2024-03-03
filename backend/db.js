const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://akshatsingh52002:ZeiIe0FipTQ0n9Ei@cluster0.nfbnldx.mongodb.net/todos");
const todoschema= mongoose.Schema({

    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model('todo', todoschema);

module.exports={
    todo
}
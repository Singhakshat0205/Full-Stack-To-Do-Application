// write basic express boilerplate code
const express= require('express');
const { createTodo, updateTodo } = require('./types');
const app= express();
const {todo}= require("./db");
app.use(express.json());

//body{
// title: String
// description: String;
//}

app.post("/todo", async function(req,res){

const createpayload= req.body;
const parsedPayload= createTodo.safeParse(createpayload);

if(!parsedPayload.success){
    res.status(411).json({
        msg: " you sent wrong inputs"
    })
    return;
}

 await todo.create({
    title:createpayload.title,
    description: createpayload.description,
    completed: false 
})

res.json({
    msg: "Todo Created",
})

})

app.get("/todos", async function(req,res){

    const todos= await todo.find({}); 

    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){

    const updatepayload= req.body;
    const parsedPayload= updateTodo.safeParse(updatepayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:" you sent wrong inputs",
        })

    return;
    }

    await todo.update({
        _id: req.body.id
    },
    {
        completed:true
    }
    )
    res.json({
        msg: " todo marked as completed", 
    })
})

app.listen(3000);
const express = require('express');
const cors = require('cors');
const {createTodo} = require('./types');
const { Todo } = require('./mongodb');
const app = express();
port = 3007;
app.use(express.json());
app.use (cors());

app.post('/todo', (req, res) => {
   const createpayload = req.body;
   const parsedpayload=createTodo.safeParse(createpayload);
    if(!parsedpayload.success){
         res.status(411).json({
              message: "Todo creation failed",
         })
         return;
    }else{
        Todo.create({
            title: req.body.title,
            description: req.body.description,
        });
        res.json({
            message: "Todo created successfully",
        });
    }
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.json(todos);
    });
    
});

app.put("/todo", async (req, res) => {
    const updatepayload = req.body;
    const parsedpayload = updateTodo.safeParse(updatepayload);
    if(!parsedpayload.success){
        res.status(411).json({
            message: "Todo updation failed",
        })
        return;
    }
    await Todo.updateById(req.body.id,{
        completed: req.body.completed,
    })
    res.json({
        message: "Todo updated successfully",
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
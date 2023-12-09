const express = require('express')
const Todo = require('../models/todo');
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.getAllTodos();
        console.log(todos)
        res.send(todos);
    } catch (err) {
        res.status(401).send({ message: err.message })
    }
});
router.get("/get-todo-by-userid/:userid", async(req,res)=>{
    try {
        const userid = req.params.userid;
        const todo = await Todo.getTodoByUserId(userid);
        if(todo.length){

            res.send(todo);
        }else{
            res.status(401).send({ message: "No todo match with this Id" })

        }
        
    } catch (err) {
        res.status(401).send({ message: err.message })
        
    }
})

router.post("/add-todo", async (req,res)=>{
    try {
        const addTodo = await Todo.addTodo(req.body);
        res.send({success:"added successfully"});
        
    } catch (err) {
        res.status(401).send({ message: err.message })
        
    }
})
router.delete("/delete-todo", async(req,res)=>{
    try {
        const deleteTodo = await Todo.deleteTodo(req.body.TodoId);
        res.send({success:"deleted successfully"});
        
    } catch (err) {
        res.status(401).send({ message: err.message })
        
    }
})

router.put("/edit-todo", async(req,res)=>{
    try {
        const editTodo  = await Todo.editTodo(req.body)

        res.send(editTodo);

    } catch (err) {
        res.status(401).send({ message: err.message })
        
    }
})

module.exports = router;

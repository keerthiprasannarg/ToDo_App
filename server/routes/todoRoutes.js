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

module.exports = router;

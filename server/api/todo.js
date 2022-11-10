const router = require('express').Router();
const Todo = require('../db/Todo')

router.get('/all', async(req,res,next) => {
    try {
        const TodosList = await Todo.findAll()
        res.send(TodosList)
    } catch(err) {
        next(err)
    }
})

router.post('/add', async(req,res,next) => {
    try {
        const newTodo = await Todo.create(req.body)
        res.send(newTodo)
    } catch(err) {
        next(err)
    }
})



module.exports = router
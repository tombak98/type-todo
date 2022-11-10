const router = require('express').Router();
const Todo = require('../db/Todo')

router.get('/all', (req,res,next) => {
    try {
        const TodosList = Todo.findAll()
        res.send(TodosList)
    } catch(err) {
        next(err)
    }
})

module.exports = router
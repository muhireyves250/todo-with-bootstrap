const router = require('express').Router();
const Todo = require("../models/todo");

// Route to display todos and the edit form
router.get("/", (req, res) => {
    const editId = req.query.edit;

    // Find the todo item to edit if an edit ID is provided
    const editPromise = editId ? Todo.findById(editId) : Promise.resolve(null);

    // Find all todos
    Todo.find()
        .then(todos => {
            return editPromise.then(editTodo => {
                res.render("index", { todos, todo: editTodo });
            });
        })
        .catch(err => console.log(err));
});

module.exports = router;

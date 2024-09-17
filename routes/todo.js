const router = require('express').Router();
const Todo = require("../models/todo");

// Route to handle adding todos
router.post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    newTodo.save()
        .then(() => {
            console.log("Successfully added todo!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});

// Route to handle deleting a todo
router.delete("/delete/todo/:id", (req, res) => {
    const { id } = req.params;

    Todo.findByIdAndDelete(id)
        .then(() => {
            console.log("Successfully deleted todo!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});

// Route to handle updating a todo
router.put("/update/todo/:id", (req, res) => {
    const { id } = req.params;
    const { todo } = req.body;

    Todo.findByIdAndUpdate(id, { todo })
        .then(() => {
            console.log("Successfully updated todo!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});

module.exports = router;

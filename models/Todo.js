const mongoose = require('mongoose');

// Define the schema for Todo items
const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    }
});

// Create a model based on the schema
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;

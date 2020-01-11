let mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 'Name cannot be blank!',
    },
    completed: {
        type: Boolean,
        default: false,
    },
    created_date: {
        type: Date,
        default: Date.now,
    }
});

//compile schema into model

let Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;


// name
// completed
// created_date
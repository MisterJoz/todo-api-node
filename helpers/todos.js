let db = require('../models');

exports.getTodos = function(req, res, next){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createTodo = function(req, res, next){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.getTodo = function(req, res, next){
    //retrieve todo item by id as a param
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updateTodo = function(req, res, next){
    //find Todo in DB and respond with the updated version(new: true)
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteTodo = function(req, res, next){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: 'We deleted it'})
    })
    .catch(function(err){
        res.send(err);
    });
};


module.exports = exports;
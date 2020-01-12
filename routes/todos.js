let express = require('express');
let router = express.Router();
let db = require('../models'); // access todo model


// index route
router.get('/', function(req, res, next){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
});

// create route, create a todo
router.post('/', function(req, res, next){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
});

// show route, retreive a todo
router.get('/:todoId', function(req, res, next){
    //retrieve todo item by id as a param
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
});


// update route

// delete route


// export the router
module.exports = router;
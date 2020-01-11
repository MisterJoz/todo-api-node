let express = require('express');
let router = express.Router();
let db = require('../models'); // access todo model


router.get('/', function(req, res, next){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
});

router.post('/', function(req, res, next){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
});

// export the router
module.exports = router;
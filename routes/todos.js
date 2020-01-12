let express = require('express');
let router = express.Router();
let db = require('../models'); // access todo model
let helpers = require('../helpers/todos');

router.route('/')
.get(helpers.getTodos) // get route using helper functions
.post(helpers.createTodo); // create route using helper functions

router.route('/:todoId')
.get(helpers.getTodo) // show route using helper functions
.put(helpers.updateTodo) // update route using helper functions
.delete(helpers.deleteTodo); //delete route using helper functions

// export the router
module.exports = router;
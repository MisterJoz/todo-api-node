let express = require('express'),
    app = express(), 
    PORT = 3000,
    bodyParser = require('body-parser');


// exports of todos.js
let todoRoutes = require('./routes/todos');

//access the request body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next){
    res.send('Hello from the root route');
});

app.use('/api/todos', todoRoutes); 

app.listen(PORT, function(){
    console.log('App is running on PORT ' + PORT);
});
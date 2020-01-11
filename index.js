let express = require('express'),
    app = express(), 
    PORT = 3000;


app.get('/', function(req, res, next){
    res.json({message: "Hi from JS objet"});
})

app.listen(PORT, function(){
    console.log('App is running on PORT ' + PORT);
});
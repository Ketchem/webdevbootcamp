var express = require("express");
var app = express();

// "/" -> Hi There
app.get("/", function(req, res){
    res.send("Hi There!");
});

// "/bye" -> Goodbye
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" -> Meow!
app.get("/dog", function(req, res){
    res.send("Meow!");
});

// Tell Express to listen for requests
app.listen('3000', 'localhost', function(){
    console.log("Server has Started");
});
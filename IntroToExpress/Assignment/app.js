var express = require("express"); 
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink!", 
        cow: "Moo!",
        cat: "I hate you human!",
        dog: "Woof Woof!"
    };
    var sound = sounds[animal];
        // res.send("Sorry, page not found...What are you doing with your life?");
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:number", function(req, res){
    var number = Number(req.params.number);
    var word = req.params.word;
    var outstring = "";
    for (var i = number; i > 0; i--){
        if (i != 1){
            outstring = outstring + word + " ";
        }
        else {
            outstring = outstring + word;
        }
    };
    res.send(outstring);
});

app.get("*", function (req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});


app.listen("3000", "localhost", function (){
    console.log("Assignment Started!")
});
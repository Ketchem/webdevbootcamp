var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/results", function (req, res){
    var searchTerm = req.query.search;
    var url = "http://www.omdbapi.com/?s="+searchTerm+"&apikey=thewdb"
    request(url, function(error, response, body){
        if(!error && response.statusCode === 200){
            var data = JSON.parse(body);
            // res.send(results["Search"][0]); 
            res.render("results",{data:data});
        }    
        else{
            console.error(response.statusCode, error);
        }
    });
});

app.get("/", function(req, res){
    res.render("search");
});

app.listen(3000, "localhost", function(){
    console.log("Movie App has started!");
});
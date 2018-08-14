var express = require("express");

var app = express();

app.get("/",function(req,res){
  res.send("HEY THIS IS MY FIRST EXPRESS APP");
});

app.get("/nigga",function(req,res){
  res.send("I LOVE YOU <3");
})


app.listen(3000);

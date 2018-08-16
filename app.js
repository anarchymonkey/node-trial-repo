var express = require("express");

var app = express();

app.get("/",function(req,res){
  res.send("HEY THIS IS MY FIRST EXPRESS APP");
});

app.get("/nigga",function(req,res){
  res.send("I LOVE YOU <3");
})

app.get("/:name/comments/:number",function(req,res){
  console.log("requested");

  var name = req.params.name;
  var number = req.params.number;

  if(name.toLowerCase() == 'aniket')
  {
    res.send("flow pointers of request");
  }
  else{
    res.send("flow pointers of request in the else section");
  }
})



app.listen(3000);

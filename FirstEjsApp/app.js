var express = require("express");
var app = express();

app.get("/testing/:name",function(req,res){
  var name = req.params.name;
  res.render("index.ejs",{nameVar : name });
});
app.listen(3000,function()
{
  console.log("server has started");
});

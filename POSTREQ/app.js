var express = require("express");
var app = express();
app.set("view engine","ejs");
app.get("/",function(request,response){
  response.render("index");
});
app.get("/posts",function(request,response){
  var friends = ["Aniket","Anil","Jande","Ankush","Nidhi"];
  response.render("friendposts",{friends : friends});
});
app.listen(3000,function(){
  console.log("THE SERVER HAS STARTED!!!");
});

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
var friends = ["Aniket","Anil","Jande","Ankush","Nidhi"];
app.get("/",function(request,response){
  response.render("index");
});

app.post("/addfriend",function(req,res){
var newFriend = req.body.newFriend;
  friends.push(newFriend);
  //res.send("YOU HAVE REACHED POST ROUTE") // getting data
  res.redirect("/posts");
});
app.get("/posts",function(request,response){

  response.render("friendposts",{friends : friends});
});
app.listen(3000,function(){
  console.log("THE SERVER HAS STARTED!!!");
});

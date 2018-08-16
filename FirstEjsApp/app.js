var express = require("express");
var app = express();

app.get("/testing/:name",function(req,res){
  var name = req.params.name;
  res.render("index.ejs",{nameVar : name });
});

app.get("/posts",function(req,res){
      var posts = [
                  {
                      title:" hey my name is aniket",
                      author : "anarchymonkey"},
                  {
                      title: " hey my name is nvKepler",
                      author:"Neeelesh Vashist"
                  }
                ];
                res.render("posts.ejs", {posts : posts})

})
app.listen(3000,function()
{
  console.log("server has started");
});

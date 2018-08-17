var express = require("express"); // require express package
var app = express(); // return value from express
app.use(express.static("public")); // to use the folder public for css and javascript
app.set("view engine","ejs"); // this will look for ejs files only otherwise if specified
app.get("/testing/:name",function(req,res){
  var name = req.params.name;
  //res.render helps us interact with the ejs file
  res.render("index",{nameVar : name }); // passing variable name as nameVar to the ejs file
});
app.get("/posts",function(req,res){
  //array of posts
      var posts = [
                  {
                      title:" hey my name is aniket",
                      author : "anarchymonkey"},
                  {
                      title: " hey my name is nvKepler",
                      author:"Neeelesh Vashist"
                  }
                ];
                //we can loop through to get posts
                res.render("posts", {posts : posts}); // rendering the posts var[array] as posts

})

//listening on port 3000
app.listen(3000,function()
{
  console.log("server has started");
});

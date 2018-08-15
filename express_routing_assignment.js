var express = require("express");
var app = express();

app.get("/",function(req,res){
 res.send(" WELCOME TO ANIKET'S ASSIGNMENT ");
});
app.get("/speak/:name",function(req,res){
var name = req.params.name;
  if(name=='pig')
  {
    res.send(" The "+name+" says OINK!! ");
  }
  else if (name == 'cow') {
    res.send(" The "+name+" says MOOOOooo!!! ");
  }
  else if (name == 'dog')
  {

    res.send(" The "+name+" says WooooooooF ");

  }
  else{
    res.send("YOU AREE WRONGGGGGGGGGGGGGGGGGGG!!");
  }
});

app.listen(3000,function(){
  console.log(" THE SERVER HAS STARTED ");
})

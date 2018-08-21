var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request'); // request package
var time;
app.set("view engine","ejs");
app.get('/',function(req,res){
  console.log('THE HOME PAGE IS ACCESSED');
  res.render("index");
});
request("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(err,res,body){
var parsedJSON = JSON.parse(body);
     time = parsedJSON["query"]["results"]['channel']['item']['condition']['date'];
    console.log(time);
});
app.get('/:name/:id',function(req,res){
  var name = req.params.name;
  var id = req.params.id;
  console.log("ACCESSED THE MOVIE " + name + "its id " + id);
  res.render("apiDisplay",{
                            time : time,
                            name : name,
                            id : id
                          });
                        });
app.listen(3000,function(){
  console.log("THE SERVER HAS STARTED");
});

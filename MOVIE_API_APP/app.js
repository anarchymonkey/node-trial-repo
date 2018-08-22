var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request'); // request package
var time;
var city;
var country;
var region;
app.set("view engine","ejs");
app.get('/',function(req,res){
  console.log('THE HOME PAGE IS ACCESSED');
  res.render("index");
});
// request for the hawai api time
request("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(err,res,body){

  var parsedJSON = JSON.parse(body);
  time = parsedJSON["query"]["results"]["channel"]["item"]["condition"]["date"];

});

// request for the other time
request("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(err,res,body){
var parsedJSON = JSON.parse(body);
    // time = parsedJSON["query"]["results"]['channel']['item']['condition']['date'];
    //console.log(time);
    console.log("THE CITY IS...");
    city =parsedJSON["query"]["results"]["channel"]["location"]["city"];
    console.log("THE COUNTRY IS...");
    country = parsedJSON["query"]["results"]["channel"]["location"]["country"];
    console.log("THE REGION IS SITUATED IN..");
    region = parsedJSON["query"]["results"]["channel"]["location"]["region"];

    // parse the json file and put it in a object

});
app.get('/:name/:id',function(req,res){
  var name = req.params.name;
  var id = req.params.id;
  console.log("ACCESSED THE MOVIE " + name + "its id " + id);
  res.render("apiDisplay",{
                            time : time,
                            name : name,
                            id : id,
                            city : city,
                            country : country,
                            region : region
                          });
                        });
app.listen(3000,function(){
  console.log("THE SERVER HAS STARTED");
});

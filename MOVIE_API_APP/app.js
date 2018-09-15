const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require('request'); // request package
let time;
let city;
let country;
let region;
let parsedJS;
app.use(bodyParser.urlencoded({extended: true}));
let data;
app.set("view engine","ejs");
app.get('/',function(req,res){
  console.log('THE HOME PAGE IS ACCESSED');
  res.render("index");
});
app.get("/results",function(req,response)
{
  request("http://www.omdbapi.com/?s=california&apikey=771ccf60",function(err,res,body){
if(!err && res.statusCode == 200)
{
    const parsedJS = JSON.parse(body);
    data = parsedJS["Search"];
  }
  else{
    console.log("check connection");
  }
  });
  response.render("results",{data:data});
  console.log("results route has started");
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

/* MAIN APPPPPPPPP PAGEEEEEEEEE */
app.get("/search",function(req,res){
  res.render("searchButton");
})


app.listen(3000,function(){
  console.log("THE SERVER HAS STARTED");
});

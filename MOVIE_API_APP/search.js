/* BASIC IMPORT STATEMENTS */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
let data;
/* ****************************************** */
app.set("view engine","ejs"); // setting the app to view only ejs files.
app.use(bodyParser.urlencoded({extended: true})); // default code for body parser

/* ******************************************************** */
/*     GETTING THE HOME PAGE                               */
/* ******************************************************** */
app.get("/",function(req,res){
  console.log("Home Page Accessed");
  res.render("index");
});

/* ******************************************************** */
/*     GETTING THE RESULTS PAGE                               */
/* ******************************************************** */

app.get("/results",function(req,res){
  console.log("results page accessed");

/* REQUEST PART FOR OMDB API */
  let query = req.query.searching;
  let url = "http://www.omdbapi.com/?s="+query+"&apikey=771ccf60";
  request(url,function(err,res,body){
    if(!err && res.statusCode == 200)
    {
        const parsedJS = JSON.parse(body);
        data = parsedJS["Search"];
    }
    else
    {
      console.log("CHECK YOUR connection");
    }
  });

    res.render("results",{data:data});
/* END OF REQUEST PART */

});

/* ******************************************************** */
/*     GETTING THE Search PAGE                               */
/* ******************************************************** */

app.get("/search",function(req,res){
  console.log("Search page accessed");
  res.render("searchButton");
})


/* LISTNING ON PORT 3002 */
app.listen(3002,function(){
  console.log("THE SERVER HAS STARTED SUCCESSFULLY");
});

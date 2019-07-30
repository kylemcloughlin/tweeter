"use strict";

// Basic express setup:

const port = process.env.PORT || 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// The in-memory database of tweets. It's a basic object with an array in it.
// const db = require("./lib/in-memory-db");
const MongoClient = require("mongodb").MongoClient;

const dh = require("./lib/data-helpers.js");

const mongodb_uri = "mongodb://localhost:27017/tweeter";

// mongodb + srv: //kmcloughlin:<password>@tweeter00-l8zkt.mongodb.net/test?retryWrites=true&w=majority


// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint). <--------
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:

MongoClient.connect(process.env.MONGODB_URI || mongodb_uri, (err, db) => {
  if (err) {
    console.log('IT DIED');
  }

  console.log('IT DIDNT DIE?');
  console.log("hit", db);
  const DataHelpers = dh(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);


  // const DataHelpers = require("./lib/data-helpers.js")(MongoClient);

  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
  // so it can define routes that use it to interact with the data layer.


  // Mount the tweets routes at the "/tweets" path prefix:
  // app.use("/tweets", tweetsRoutes);

  // app.post("/tweets/", (req, res) => {

  //   console.log('APP.POST/tweets/', req.body);




  //   //tweeter input !!!!! <----------

  //   res.redirect("/")
  // })

  app.listen(port, () => {
    console.log(`listening on port ${port}`);



  });

});
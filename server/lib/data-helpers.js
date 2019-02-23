"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
// module.exports = function makeDataHelpers(db) {
//   return {

//     // Saves a tweet to `db`
//     saveTweet: function(newTweet, callback) {

//       simulateDelay(() => {
//         // MongoClient.tweets.push(newTweet);
//         callback(null, true);
//       });
//     },

//     // Get all tweets in `db`, sorted by newest first


// gi

module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function (newTweet, callback) {
      console.log("SAVETWEETDB", db);
      db.collection("tweeter").insert(newTweet);
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function (callback) {
      db.collection("tweeter").find().toArray(callback);








    }

  };
}





















// db.collection('inserts').insertOne({a:1}, function(err, r) {
//   assert.equal(null, err);
//   assert.equal(1, r.insertedCount);


// getTweets: function(callback) {
//   console.log('DB*******', db);
//   //here 

//   simulateDelay(() => {
//     const sortNewestFirst = (a, b) => a.created_at - b.created_at;
//     // callback(null, MongoClient.tweets.sort(sortNewestFirst));
//   });
// }
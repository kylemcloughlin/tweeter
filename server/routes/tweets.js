"use strict";

const userHelper = require("../lib/util/user-helper")
// const DataHelpers = require("../lib/data-helpers") idk if this is important deltete if not
const express = require('express');
const tweetsRoutes = express.Router();

module.exports = function (DataHelpers) {



  tweetsRoutes.get("/", function (req, res) {
    DataHelpers.getTweets((err, tweeter) => {
      if (err) {
        res.status(500).json({
          error: err.message
        });
      } else {
        
        res.json(tweeter);
      }
    });
  });





  tweetsRoutes.post("/", function (req, res) {
    console.log("TWEETs.JS REQ.BODY.TEXT", req.body.text);
    if (!req.body.text) {
      res.status(400).json({
        error: 'invalid request: no data in POST body'
      });
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({
          error: err.message
        });
      } else {
        res.status(201).send();
      }
    });
  });
  console.log("TWEETROUTES****", tweetsRoutes);
  return tweetsRoutes;

};
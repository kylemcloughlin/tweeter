/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
    console.log("document ready")
    $("input").on('click', function() {
     
        $(".name").append(`${tweetData.user.name}`);
        $("img").append(`${tweetData.user.avatars.small}`);
        $(".handle").append(`${tweetData.user.handle}`);
        $(".tweetBody").append(`${tweetData.content.text}`);
  
  
    //  var $tweet = $("<article>").addClass("tweet");
    // $()
    

    
    //  console.log($tweet);
        })


});

// $("input").on('click', function() {
//     var $tweet = $("<article>").addClass("tweet");
//     console.log("tweet");
//     })


    const tweetData = {
        "user": {
          "name": "dave",
          "avatars": {
            "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
          },
          "handle": "@liveofromdave"
        },
        "content": {
          "text": "hate is a strong word to use for socks."
        },
        "created_at": 1461116232227
      }
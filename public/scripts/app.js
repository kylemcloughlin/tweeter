// import { db } from "mongodb";
// const dh = require("./server/lib/data-helpers.js");
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const db = 


$(document).ready(function () {
    console.log("document ready")
    $.ajax('/tweets/')
        .done((response) => {
            console.log('GET RESPONSE', response)
            allTweets(response, tweetRenderer);
        })
        .fail(() => {
            console.log('The call failed')
        })

    // allTweets(data, tweetRenderer)
    $(".newTweet").submit(function (event) {
        // alert( "Handler for .submit() called." );
        event.preventDefault();
        let $output = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: '/tweets/',
            data: $output,
            success: function (data) {
                console.log("success!! !", data);

                $.ajax('/tweets/')
                    .done((response) => {
                        console.log('GET RESPONSE', response)
                        allTweets(response, tweetRenderer);
                    })
                    .fail(() => {
                        console.log('The call failed')
                    })




            }
        });



    })


});




$("input").on("click", function (event) {
    event.preventDefault();
    console.log(event);

})


function tweetRenderer(data) {


    let userName = $("<p></p>").text(`${data.user.name}`).addClass("name");
    let handle = $("<p></p>").text(`${data.user.handle}`).addClass("handle")

    let dp = $("<img>").attr("src", `${data.user.avatars.small}`).addClass("displayImg")
    let header = $("<header></header>").append(dp, userName, handle).addClass("tweetHeader")

    let tweetBody = $("<p></p>").text(`${data.content.text}`).addClass("tweetBody");

    let footer = $("<footer></footer>").text(`${data.created_at}`)

    let article = $("<article></article").append(header, tweetBody, footer).addClass("tweet")

    return article.html();

}

function allTweets(dh, callback) {
    $('#tweets').empty();
    for (var i = dh.length - 1; i >= 0; i--) {
        var $tweet = $("<article></article>").append(callback(dh[i])).addClass("tweet")



        $($tweet).appendTo('#tweets')

        // $('#tweets').empty();
    }
    // $('#tweets').empty();

}

$(document).ready(function validation() {
    $('#error1').toggle();
    $('#error2').toggle();
    $('#tweetBut').click(function () {
        let x;
        x = document.getElementById("textarea").value;
        if (x === "" || x === null) {
            $('#error1').slideDown();
            setTimeout(function () {
                $('#error1').slideUp();
            }, 5000);

            event.preventDefault();
            return false;
        }

        if (x.length > 140) {
            $('#error2').slideDown();
            setTimeout(function () {
                $('#error2').slideUp();
            }, 5000);

            event.preventDefault();
            return false;


            event.preventDefault();
            return false;
        }
    })

})


$(document).ready(function () {
    $("#newTweet").toggle()
    $("#composeBut").click(function () {
        $("#newTweet").slideDown();
        // .slideDown();
        var input = document.getElementById('textarea');
        input.focus();
        input.select();
    });
    $("#tweetBut").click(function () {
        $("#newTweet").slideUp();
        // .slideDown();

    });

    // });



});
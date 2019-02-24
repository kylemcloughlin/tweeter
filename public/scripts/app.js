/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function () {
    console.log("document ready");
    $.ajax('/tweets/')
        .done((response) => {
            console.log('GET RESPONSE', response);
            allTweets(response, tweetRenderer);
        })
        .fail(() => {
            console.log('The call failed');
        });

    $(".newTweet").submit(function (event) {
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
                        console.log('GET RESPONSE', response);
                        allTweets(response, tweetRenderer);
                    })
                    .fail(() => {
                        console.log('The call failed');
                    });




            }
        });



    });


});




$("input").on("click", function (event) {
    event.preventDefault();
    console.log(event);

});


function tweetRenderer(data) {
   let hoursAgo = Math.round(Date.now() / 1000 / 60 / 60) - Math.round( data.created_at / 1000 / 60 / 60 );
   let userName = $("<p></p>").text(`${data.user.name}`).addClass("name");
    let handle = $("<p></p>").text(`${data.user.handle}`).addClass("handle");
    let dp = $("<img>").attr("src", `${data.user.avatars.small}`).addClass("displayImg");
    let header = $("<header></header>").append(dp, userName, handle).addClass("tweetHeader");
    let tweetBody = $("<p></p>").text(`${data.content.text}`).addClass("tweetBody");
    let footer = $("<footer></footer>").text(`Posted ${hoursAgo} hours ago.`);
    let article = $("<article></article").append(header, tweetBody, footer).addClass("tweet");

    return article.html();

}

function allTweets(dh, callback) {
    $('#tweets').empty();
    for (var i = dh.length - 1; i >= 0; i--) {
        var $tweet = $("<article></article>").append(callback(dh[i])).addClass("tweet");



        $($tweet).appendTo('#tweets');


    }


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


        }
    });

});


$(document).ready(function () {
    $("#newTweet").toggle();
    $("#composeBut").click(function () {
        $("#newTweet").slideDown();

        var input = document.getElementById('textarea');
        input.focus();
        input.select();
    });
    $("#tweetBut").click(function () {
        $("#newTweet").slideUp();


    });





});
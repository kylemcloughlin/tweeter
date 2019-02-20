$(document).ready(function() {
    // console.log("document ready")
    $("textarea").on('input', function() {
        let text = $(this);
    // text.va() gives content 
        let length = text.val().length;
        let countdown = 140 - length;
        let counter = text.parent('form').find('.counter');
        if (countdown < 50) {
                        counter.css('color', 'darkred');
                    } 
        if (countdown > 50) {
                 counter.css('color', 'black')
             }       
        counter.text(countdown)
 
      }); 


});
//   / test function to check connections have been established








// $(function() {

//     $('textarea').on('input', function(){
//         let text = $(this);
//         let counter = $(this).parent('form').find('.counter');
//         let length = text.val().length;
//         let countdown = 140 - length;
        
//         if (countdown < 50) {
//             counter.css('color', 'darkred');
//         } 
//         counter.html(countdown);
//     });

    
// });
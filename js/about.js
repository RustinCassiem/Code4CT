// jQuery variables and objects for counter up
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum) + "%");
      },
      complete: function() {
        $this.text(this.countNum + "%");
      }
    });
  });

// jquery document ready function button click length validate fadetoggle filter
        $(document).ready(function(e) {
            $('#submit').click(function() {
              var sEmail = $('#email').val();
                if ($.trim(sEmail).length == 0) {

          }
                if (validateEmail(sEmail)) {
            $('#submit').click(function(){
              $("#valid").fadeToggle("fast");
            });
          }
    else {

            $('#submit').click(function(){
              $("#invalid").fadeToggle("fast");
            });

        }
      });
      });

    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }
  // carousel for variables and functions
    $(document).ready(function() {
      // variables for auto slide,hover pause,and key slide
        var auto_slide = 1;
        var hover_pause = 1;
        var key_slide = 1;
        // speed of the auto slide
        var auto_slide_seconds = 0;

        $('#carousel_ul li:first').before($('#carousel_ul li:last'));

        // command to start slide strictly at 1
        if(auto_slide == 1){
          // variable timer for the interval between slide
            var timer = setInterval('slide("right")', auto_slide_seconds);

            $('#hidden_auto_slide_seconds').val(auto_slide_seconds);
        }
        // hover pause to strictly start at the first image when cursor is off image
        if(hover_pause == 1){
            $('#carousel_ul').hover(function(){
                //stop the interval
                clearInterval(timer)
            },function(){
                //and when mouseout start it again
                timer = setInterval('slide("right")', auto_slide_seconds);
            });

        }


        if(key_slide == 1){

            //binding keypress function
            $(document).bind('keypress', function(e) {
                //keyCode for left arrow is 37 and for right it's 39 '
                if(e.keyCode==37){
                        //initialize the slide to left function
                        slide('left');
                }else if(e.keyCode==39){
                        //initialize the slide to right function
                        slide('right');
                }
            });

        }

  });

// functions for carousel and all other elements within carousel container
//slide function
function slide(where){
            //get the item width
            var item_width = $('#carousel_ul li').outerWidth() + 10;
            // if statement to allow variable to slide left
            if(where == 'left'){

                var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
            }else{

                var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;

            }
            //make the sliding effect using jQuery's animate function... '
            $('#carousel_ul:not(:animated)').animate({'left' : left_indent},3000,function(){

                /*animation for images to appear after each by adding a if statement ollowing it to repeat after or before*/
                if(where == 'left'){
                    //if it slided to left we put the last item before the first item
                    $('#carousel_ul li:first').before($('#carousel_ul li:last'));
                }else{
                    //if it slided to right we put the first item after the last item
                    $('#carousel_ul li:last').after($('#carousel_ul li:first'));
                }
                //default left indent
                $('#carousel_ul').css({'left' : '210px'});
            });

}
// jQuery for smooth scroll button
jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#backToTop').fadeIn('slow');
        } else {
            $('#backToTop').fadeOut('slow');
        }
    });
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
});

// variable object for progresss bar start angle,value,and colour
var progressBarOptions = {
      startAngle: -1.55,
      value: 0.85,
      fill: {
        color: '#e38f84'
      }
    }
    // jQuery styling of progress bars
    $('.timer').mouseover(function() {
      $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
      });
    // jQuery styling of progress bars
     $('#circle-b').circleProgress({
        value : 0.80,
        fill: {
          color: '#e38f84'
        }
      });
    // jQuery styling of progress bars
     $('#circle-c').circleProgress({
        value : 0.90,
        fill: {
          color: '#e38f84'
        }
      });
    // jQuery styling of progress bars
     $('#circle-d').circleProgress({
        value : 0.97,
        fill: {
          color: '#e38f84'
        }
      });
    });

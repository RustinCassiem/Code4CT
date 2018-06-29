//navbar
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  })
});




//countup timer
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 50000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum)+ "+");
    },
    complete: function() {
      $this.text(this.countNum + "+");
      //alert('finished');
    }

  });

});

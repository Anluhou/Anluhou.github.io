  $(function(){
    jQuery.fn.scrollTo = function(speed) {
      var targetOffset = $(this).offset().top;
      $('html,body').stop().animate({scrollTop: targetOffset}, speed);
      return this;
    };
    // use
    $(".to-top").click(function(){
      $("body").scrollTo(500);
      return false;
    });
  });

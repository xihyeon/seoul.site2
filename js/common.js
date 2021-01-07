$(function(){
  $(".depth0").click(function(){
    // $(".depth0").removeClass("on");
    $(this).toggleClass("on");
    $("a").toggleClass(".active");
  });

  // /*banner btn hover*/
  // $(".banner-btn").click(function(){
  //   $(".banner-btn").removeClass("on");
  //   $(this).addClass("on");
  // });

  /*btn button*/
  $("#slide_btn2").click(function(){
    $("#slide_btn1").removeClass("on");
    $("#slide1").removeClass("on");
    $(this).addClass("on");
    $("#slide2").addClass("on");
  });
  $("#slide_btn1").click(function(){
    $("#slide_btn2").removeClass("on");
    $("#slide2").removeClass("on");
    $(this).addClass("on");
    $("#slide1").addClass("on");
  });
});

/*// document ready*/

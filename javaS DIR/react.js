// variable
var x = false;
$(document).ready(function () {
  let scrollPos = 0;
  $(window).scroll(function () {
    var newScrollPos = $(window).scrollTop();
    if (newScrollPos > scrollPos) {
      $("nav").slideUp(900);
      $(".nav-item").slideUp(1000);
      x = true;
      down();
      console.log(x);
    }
    if (newScrollPos < scrollPos) {
      $("nav").slideDown();
      $(".nav-item").slideDown();
      x = false;
      down();
    }
    scrollPos = newScrollPos;
  });
});

$("#nav-up").on("click", function () {
  $("nav").slideUp(1000);
  $(".nav-item").slideUp(1000);
  x = true;
  down();
  console.log(x);
});

$("#nav-down").css("display", "none");

function down() {
  if (x == true) {
    console.log("activated");
    $("#nav-down").fadeIn(200); // Added this line to display "nav-down"
    $("#nav-down").on("click", function () {
      $("nav").slideDown();
      $(".nav-item").slideDown();
      $("#nav-down").fadeOut(500);
    });
  } else {
    console.log("Message form navbar is that, is is loaded");
    $("#nav-down").fadeOut(500);
  }
}

$("#scroll1").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

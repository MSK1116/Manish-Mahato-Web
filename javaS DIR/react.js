// variable

var x = false;
var vhW = window.innerWidth || document.documentElement.clientWidth;
var vhH = window.innerHeight || document.documentElement.clientHeight;
$("#scroll1").css("display", "none");
if (vhW > 655) {
  console.log("Device scrren was found to be in ggod condition, Loading all the animation...");
  $(document).ready(function () {
    let scrollPos = 0;
    $(window).scroll(function () {
      var newScrollPos = $(window).scrollTop();
      if (newScrollPos > scrollPos) {
        $("nav").slideUp(900);
        $(".nav-item").slideUp(1000);
        $("#scroll1").fadeIn(200);

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
      $("#scroll1").fadeIn(200);
      $("#nav-down").on("click", function () {
        $("nav").slideDown();
        $(".nav-item").slideDown();
        $("#nav-down").fadeOut(500);
      });
    } else {
      console.log("Message form navbar is that, is loaded");
      $("#nav-down").fadeOut(500);
    }
  }
} else {
  console.log("Device was found with small scrren, Remove the animation");
  var x = false;
  if (x == false) {
    $("#nav-down").fadeIn(200);

    $("#nav-down").on("click", function () {
      $("nav").slideDown();
      $(".nav-item").slideDown();
      $("#nav-down").fadeOut(500);

      x = true;
    });
  }
  $(".content").on("click", function () {
    if (x == true) {
      $("#nav-down").fadeIn(200);
      $("#scroll1").fadeIn(200);
      $("nav").slideUp(900);
      $(".nav-item").slideUp(1000);
      x = false;
    }
  });
}
var y = false;
$("#scroll1").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  y = true;
  fadeTheScroll1();
});
function fadeTheScroll1() {
  if (y == true) {
    $("#scroll1").fadeOut(2000);
  }
}

// control more css
$(document).ready(function () {
  if (vhW < 566) {
    console.log("Small size css activated");
    $(".social-link").css("display", "none");
    $(".login-box").css("display", "none");
  }
  if (vhW > 566) {
    $(".social-link-1").css("display", "none");
    $("#Name1").addClass("type");
    $(".login-box-sm").css("display", "none");
  }
});

$(".login-box-exp").on("click", function () {
  $(".login-textarea").fadeOut(2);
  $(".login-box-exp").addClass("expand-box");
  $(".login-form").fadeIn(4005);
  $(".login-form").css("display", "flex");
  $(".login-box-exp").css("justify-content", "center");
});

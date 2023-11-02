$("#img-1").hide();
$("#img-2").hide();
$("#img-3").hide();
$(document).ready(function () {
  var hider = 300;
  var shower = 3000;
  var curIndex = 0;
  var imgQue = ["#img-1", "#img-2", "#img-3"];
  var btnQue = ["#g-c-0", "#g-c-1", "#g-c-2"];

  function fadeImage() {
    $(".g-img").hide();
    $(".g-control").show();
    $(imgQue[curIndex]).fadeIn(shower, function () {
      $(btnQue[curIndex]).removeClass("changeToWhite");
      $(imgQue[curIndex]).fadeOut(hider, function () {
        temp = curIndex;
        curIndex = (curIndex + 1) % imgQue.length;
        $(btnQue[curIndex]).addClass("changeToWhite");
        console.log(curIndex, temp);
        setTimeout(fadeImage, 0);
      });
    });
  }

  // $("#g-c-0").on("click", function () {
  //   curIndex = 0;
  //   $(".g-img").hide();
  //   $(".g-control").hide();
  //   $(imgQue[curIndex]).fadeIn(shower);
  //   fadeImage();
  // });
  // $("#g-c-1").on("click", function () {
  //   curIndex = 1;
  //   $(".g-img").hide();
  //   $(imgQue[curIndex]).fadeIn(shower);
  // });
  // $("#g-c-2").on("click", function () {
  //   curIndex = 2;
  //   $(".g-img").hide();
  //   $(imgQue[curIndex]).fadeIn(shower);
  // });
  fadeImage();
});

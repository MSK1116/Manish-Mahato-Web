$("#img-1").hide();
$("#img-2").hide();
$("#img-3").hide();

$(document).ready(function () {
  var images = ["#img-1", "#img-2", "#img-3"];
  var fadeInDuration = 3500;
  var fadeOutDuration = 500;
  var currentIndex = 0;

  function fadeImages() {
    $(images[currentIndex]).fadeIn(fadeInDuration, function () {
      $(images[currentIndex]).fadeOut(fadeOutDuration, function () {
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(fadeImages, 0);
      });
    });
  }

  fadeImages();
  $(".gallery").on("mouseover", function () {
    // Pause the slideshow on hover
    clearTimeout(fadeTimeout);
    $(images[currentIndex]).fadeIn(300);
  });

  $(".gallery").on("mouseout", function () {
    // Resume the slideshow on mouseout
    fadeImages();
  });
});

var a = new Date();
var c = a.getHours();

console.log(c);
$(document).ready(function () {
  if (c > 23 || (c >= 4 && c < 11)) {
    $("#greet").text("It's mid night, better to sleep now!");
  } else if (c > 4 && c < 11) {
    $("#greet").text("Morning");
  } else if (c > 12 && c < 18) {
    $("#greet").text("Good Evening");
  } else {
    console.log("sex3");
    $("#greet").text("Namaste");
  }
});

$(document).ready(function() {
  $("#darkTheme").click(function() {
    $("body").addClass("dark");
    $("h1, h2, p, ul").addClass("light");
  });

  $("#lightTheme").click(function() {
    $("body").removeClass();
    $("h1, h2, p, ul").removeClass();
  });


});
// togle menu/nav-bar Script
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $("header .menu").toggleClass("active");
    $("header i").toggleClass("active");
  });
});

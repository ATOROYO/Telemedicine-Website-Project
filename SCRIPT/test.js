// togle menu/nav-bar Script
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".nav-bar .menu").toggleClass("active");
    $(".nav-bar i").toggleClass("active");
  });
});

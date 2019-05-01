$(document).ready(function() {
  $("#codename").text("Register.c")
  $("#page").load("/resources/code/register.html");

  $("#r").click(function() {
    $("#codename").text("Register.c")
    $("#page").load("/resources/code/register.html");
  })

  $("#q").click(function() {
    $("#codename").text("Quadtree.c")
    $("#page").load("/resources/code/quadtree.html");
  })

  $("#h").click(function() {
    $("#codename").text("Hack.hdl")
    $("#page").load("/resources/code/quadtree.html");
  })

  $("#x").click(function() {
    $("#codename").text("XO.py")
    $("#page").load("/resources/code/xo.html");
  })
});

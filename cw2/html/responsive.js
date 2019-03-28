$(document).ready(function() {
  var state = 0;

  $("#ddlink").click(function() {
    if(state == 0){
      $(".dropdown").css("display", "block");
      state = 1;
    }
    else{
      $(".dropdown").css("display", "none");
      state = 0;
    }
  });
});

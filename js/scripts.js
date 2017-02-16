$(function(){
  var height = parseInt(prompt("How tall are you?(in inches)"));
  debugger;
  if (height >= 32) {
    if (height <= 47 && height>=32) {
      $("#parentMessage").show();
      $(".aboveHeight").removeClass("ride");
      $(".aboveHeight").addClass("rideTwo");
      $(".kidRide").removeClass("ride");
      $(".kidRide").addClass("rideTwo");
    } else {
      $(".aboveHeight").removeClass("ride");
      $(".aboveHeight").addClass("rideTwo");
      $(".kidRide").removeClass("ride");
      $(".kidRide").addClass("rideTwo");
  }} else {
    $(".kidRide").removeClass("ride");
    $(".kidRide").addClass("rideTwo");
  }
});

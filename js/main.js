$(document).ready(function() {

  var $dashOffset = $("path").css("stroke-dashoffset");

  $(window).scroll(function() {

    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    console.log($percentageComplete);

    var $newUnit = parseInt($dashOffset, 10);

    var $offsetUnit = $percentageComplete * ($newUnit / 100);

    $("path").css("stroke-dashoffset", $newUnit - $offsetUnit);
   	if ($percentageComplete == 100) {
   		 $(".deadpool").css("fill", "#DC1313");
   		} else {
   			 $(".deadpool").css("fill", "transparent");
   		}
  });
});
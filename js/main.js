$(document).ready(function() {

  var $dashOffset = $("path").css("stroke-dashoffset");

  $(window).scroll(function() {

    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    console.log($percentageComplete);

    var $newUnit = parseInt($dashOffset, 10);

    var $offsetUnit = $percentageComplete * ($newUnit / 100);

    $("path").css("stroke-dashoffset", $newUnit - $offsetUnit);

//To enable Fill
   	// if ($percentageComplete == 100) {
   	// 	 $(".ironman").css("fill", "#DC1313");
   	// 	} else {
   	// 		 $(".ironman").css("fill", "transparent");
   	// 	}
  });
});
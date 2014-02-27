// parallax scrolling effect (may not suitable for resolution lower than 1140px in width)

var $window = $(window);
var speed = 0.4;

function update() {

	$("#about").each(function() {

		var position = $window.scrollTop();

		var $element = $(this);
		
		var height = $element.height() + 165;
		
		var newPos = Math.round((height - position) * speed);
		
		if (newPos > -95) {
			$(this).css("backgroundPosition", "100% " + newPos + "px");
		};
		
		//$(this).css("backgroundPosition", "50% " + Math.round((height - position) * speed) + "px");
		
	});
};
$window.bind("scroll", update);
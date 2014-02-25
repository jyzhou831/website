// parallax scrolling effect

var $window = $(window);
var velocity = 0.25;

function update() {

	var pos = $window.scrollTop();

	$("#about").each(function() {

		var $element = $(this);
		var height = $element.height() + 100;
		$(this).css('backgroundPosition', '100% ' + Math.round((height - pos) * velocity) + 'px');

	});
};

$window.bind("scroll", update);
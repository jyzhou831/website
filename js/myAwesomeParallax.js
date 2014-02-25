// parallax scrolling effect

var $window = $(window);
var velocity = 0.2;

function update() {

	var pos = $window.scrollTop();

	$("#about").each(function() {

		var $element = $(this);
		var height = $element.height();
		$(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');

	});
};

$window.bind("scroll", update);
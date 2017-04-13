$(document).ready(function() {
	$('#blue').mouseenter(function() {
		$('#blue').fadeTo('fast', 1.0)
	});
	$('#blue').mouseleave(function() {
		$('#blue').fadeTo('fast', 0.9)
	});
	/*$('.textbox').click(function() {
		$('.textbox').addClass('highlighted')
	});*/
});
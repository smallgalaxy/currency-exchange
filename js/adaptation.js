$(document).ready(function() {
	adaptation();

	$(window).resize(function() {
		adaptation();
	});

	function adaptation() {
		$('.body').css('font-size', (10 / (1150 / window.innerWidth)) + 'px');
		$('.container').height($('.container').width() * 0.6860869565217391);
		$('.menu_and_logo').height($('.menu_and_logo').width() * 0.0469565217391304);
		$('.main').height($('.main').width() * 0.639130434782608);
		$('.section').height($('.section').width() * 0.303645833333333);
		$('.p_butt').css('font-size', (1.1 / (1150 / window.innerWidth)) + 'em');
		$('.section').css('bottom', (3 / (1920 / window.innerWidth)) + 'px');
	}
});
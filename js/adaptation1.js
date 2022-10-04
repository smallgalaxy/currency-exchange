$(document).ready(function() {
	adaptation();

	$(window).resize(function() {
		adaptation();
	});

	function adaptation() {
		$('.body').css('font-size', (10 / (1150 / window.innerWidth)) + 'px');
		$('.container').height($('.container').width() * 1.731304347826087);
		$('.menu_and_logo').height($('.menu_and_logo').width() * 0.0469565217391304);
		$('.large').height($('.large').width() * 0.7826086956521739);
		$('.text_men').css('bottom', (17 / (1150 / window.innerWidth)) + 'px');
		$('.info_text').css('bottom', (363 / (1150 / window.innerWidth)) + 'px');
		$('.butt_info').css('width', (215 / (1150 / window.innerWidth)) + 'px');
		$('.but_p p').css('font-size', (1.1 / (1150 / window.innerWidth)) + 'em');
		$('.galka1').css('bottom', (6 / (1150 / window.innerWidth)) + 'px');
		$('.number').css('bottom', (20 / (1150 / window.innerWidth)) + 'px');
		$('.number').css('padding-top', (22 / (1150 / window.innerWidth)) + 'px');
		$('.info_text2').css('bottom', (409 / (1150 / window.innerWidth)) + 'px');
		$('.galka2').css('top', (-2 / (1150 / window.innerWidth)) + 'px');
		$('.info_text3').css('bottom', (685 / (1150 / window.innerWidth)) + 'px');
	}
});
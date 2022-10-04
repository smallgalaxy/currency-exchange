$(document).ready(function() {
	adaptation();

	$(window).resize(function() {
		adaptation();
	});

	function adaptation() {
		$('.body').css('font-size', (10 / (1150 / window.innerWidth)) + 'px');
		$('.menu_and_logo').height($('.menu_and_logo').width() * 0.0469565217391304);
		$('.filtr_menu').css('margin-top', (107 / (1150 / window.innerWidth)) + 'px');
		$('.filtr_menu').css('margin-bottom', (54 / (1150 / window.innerWidth)) + 'px');
		$('.line').css('margin-top', (8 / (1150 / window.innerWidth)) + 'px');
		$('.history_block').css('height', (254 / (1150 / window.innerWidth)) + 'px');
		$('.history_block').css('border-radius', (14 / (1150 / window.innerWidth)) + 'px');
		$('.history_block').css('margin-bottom', (26 / (1150 / window.innerWidth)) + 'px');
		$('.history_block').css('padding-bottom', (30 / (1150 / window.innerWidth)) + 'px');
		$('.history_block').css('padding-top', (26 / (1150 / window.innerWidth)) + 'px');
		$('.large').css('height', (1699 / (1150 / window.innerWidth)) + 'px');
		$('.calculator').css('border-radius', (10 / (1150 / window.innerWidth)) + 'px');
		$('.input_text').css('border-radius', (10 / (1150 / window.innerWidth)) + 'px');
		$('.input_text2').css('border-radius', (10 / (1150 / window.innerWidth)) + 'px');
		$('.input').css('margin-right', (90 / (1150 / window.innerWidth)) + 'px');
		$('.input2').css('margin-right', (195 / (1150 / window.innerWidth)) + 'px');
		$('.butt3').css('border-radius', (10 / (1150 / window.innerWidth)) + 'px');
		$('.history').css('border-radius', (4.05111 / (1150 / window.innerWidth)) + 'px');
		$('table').css('padding-top', (31 / (1150 / window.innerWidth)) + 'px');
		$('table').css('margin-bottom', (35 / (1150 / window.innerWidth)) + 'px');
		$('.butt4').css('height', (52.45 / (1150 / window.innerWidth)) + 'px');
		$('.butt4').css('border-radius', (649.412 / (1150 / window.innerWidth)) + 'px');
	}
});
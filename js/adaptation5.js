$(document).ready(function() {
	adaptation();

	$(window).resize(function() {
		adaptation();
	});

	function adaptation() {
		$('.body').css('font-size', (10 / (1150 / window.innerWidth)) + 'px');
		$('.menu_and_logo').height($('.menu_and_logo').width() * 0.0469565217391304);
		$('.large').css('height', (1372 / (1150 / window.innerWidth)) + 'px');
		$('.calculator').css('border-radius', (10 / (1150 / window.innerWidth)) + 'px');
		$('.input_text').css('border-radius', (10 / (1150 / window.innerWidth)) + 'px');
		$('.input_text').css('height', (50 / (1150 / window.innerWidth)) + 'px');
		$('.input').css('margin-right', (4 / (1150 / window.innerWidth)) + 'px');
		$('.history').css('border-radius', (4.05111 / (1150 / window.innerWidth)) + 'px');
		$('table').css('padding-top', (31 / (1150 / window.innerWidth)) + 'px');
		$('table').css('margin-bottom', (35 / (1150 / window.innerWidth)) + 'px');
		$('.butt4').css('height', (52.45 / (1150 / window.innerWidth)) + 'px');
		$('.butt4').css('border-radius', (649.412 / (1150 / window.innerWidth)) + 'px');
		$('.currency_in').css('border-radius', (4 / (1150 / window.innerWidth)) + 'px');
		$('.info').css('border-radius', (4 / (1150 / window.innerWidth)) + 'px');
		$('.info').css('height', (371 / (1150 / window.innerWidth)) + 'px');
		$('.input').css('width', (60 / (1150 / window.innerWidth)) + 'px');
		$('.min_max').css('bottom', (6 / (1150 / window.innerWidth)) + 'px');
		$('.history').css('border-radius', (4.05111 / (1150 / window.innerWidth)) + 'px');
		$('.size_img_border').css('bottom', (314 / (1150 / window.innerWidth)) + 'px');
	}
});
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
		$('.input_text2').css('height', (50 / (1150 / window.innerWidth)) + 'px');
		$('.input_text2').css('border-radius', (10 / (1150 / window.innerWidth)) + 'px');
		$('.input').css('margin-right', (4 / (1150 / window.innerWidth)) + 'px');
		$('.butt3').css('border-radius', (10 / (1150 / window.innerWidth)) + 'px');
		$('.history').css('border-radius', (4.05111 / (1150 / window.innerWidth)) + 'px');
		$('table').css('padding-top', (31 / (1150 / window.innerWidth)) + 'px');
		$('table').css('margin-bottom', (35 / (1150 / window.innerWidth)) + 'px');
		$('.butt4').css('height', (52.45 / (1150 / window.innerWidth)) + 'px');
		$('.butt4').css('border-radius', (649.412 / (1150 / window.innerWidth)) + 'px');
		$('.currency_in').css('border-radius', (4 / (1150 / window.innerWidth)) + 'px');
		$('.info').css('border-radius', (4 / (1150 / window.innerWidth)) + 'px');
		$('.input').css('width', (60 / (1150 / window.innerWidth)) + 'px');
		$('.slider').css('height', (4 / (1150 / window.innerWidth)) + 'px');
		$('.slider').css('border-radius', (5 / (1150 / window.innerWidth)) + 'px');
		$('.slider').css('margin-top', (3 / (1150 / window.innerWidth)) + 'px');
		$('.slider').css('margin-left', (4 / (1150 / window.innerWidth)) + 'px');
		$('.slidecontainer p').css('margin-bottom', (7 / (1150 / window.innerWidth)) + 'px');
		$('.slidecontainer').css('height', (52 / (1150 / window.innerWidth)) + 'px');
		$('.info h1').css('margin-bottom', (17 / (1150 / window.innerWidth)) + 'px');
		$(':root').css('--hieght-slider', (16 / (1150 / window.innerWidth)) + 'px');
		$('.elipse div').css('width', (10 / (1150 / window.innerWidth)) + 'px');
		$('.elipse div').css('height', (10 / (1150 / window.innerWidth)) + 'px');
		$('.min_max').css('bottom', (6 / (1150 / window.innerWidth)) + 'px');
		$('.butt3').css('letter-spacing', (1 / (1150 / window.innerWidth)) + 'px');
		$('.butt3').css('height', (48.36 / (1150 / window.innerWidth)) + 'px');
		$('.butt3').css('border-radius', (6.28 / (1150 / window.innerWidth)) + 'px');
		$('#demo').css('margin-right', (5 / (1150 / window.innerWidth)) + 'px');
		$('.history').css('border-radius', (4.05111 / (1150 / window.innerWidth)) + 'px');
	}
});
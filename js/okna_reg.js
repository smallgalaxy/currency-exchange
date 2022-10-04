$(document).ready(function() {
	adaptation();

	$(window).resize(function() {
		adaptation();
	});

	function adaptation() {
		$('#window').css('height', (386 / (1150 / window.innerWidth)) + 'px');
		$('#window3').css('height', (486 / (1920 / window.innerWidth)) + 'px');
		$('#window3').css('margin-top',(175 / (1920 / window.innerWidth)) + 'px');
		$('.text_swep').css('margin-bottom', (34 / (486 / (window.innerWidth * 0.470833333333 * 0.537610619469))) + 'px');
		$('.hh').css('margin-left', (188 / (1920 / window.innerWidth)) + 'px');
		$('.hh').css('margin-top', (119 / (486 / (window.innerWidth * 0.470833333333 * 0.537610619469))) + 'px');
		$('.hh').css('width', (529 / (1920 / window.innerWidth)) + 'px');
		$('.nn').css('margin-bottom', (44 / (486 / (window.innerWidth * 0.470833333333 * 0.537610619469))) + 'px');
		$('.group_but').css('margin-left', (183 / (1920 / window.innerWidth)) + 'px');
		$('.sub4').css('width', (250 / (1920 / window.innerWidth)) + 'px');
		$('.sub3').css('width', (250 / (1920 / window.innerWidth)) + 'px');
		$('.sub4').css('border-radius', (10 / (1920 / window.innerWidth)) + 'px');
		$('.sub3').css('border-radiush', (10 / (1920 / window.innerWidth)) + 'px');
		$('.sub4').css('height', (77 / (486 / (window.innerWidth * 0.470833333333 * 0.537610619469))) + 'px');
		$('.sub3').css('height', (77 / (486 / (window.innerWidth * 0.470833333333 * 0.537610619469))) + 'px');
		$(':root').css('--border-b', (4 / (1920 / window.innerWidth)) + 'px');
		$('.sub3').css('margin-right', (43 / (1920 / window.innerWidth)) + 'px');

		$('#window').css('padding-left', (243 / (1920 / window.innerWidth)) + 'px');
		$('#window').css('padding-right', (243 / (1920 / window.innerWidth)) + 'px');
		$('#window').css('padding-top', (40 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		$('#window').css('padding-bottom', (62 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		$('#window').css('margin-top', (175 / (1920 / window.innerWidth)) + 'px');
		$('.input4').css('line-height', (70 / (1920 / window.innerWidth)) + 'px');
		$('.input4').css('border-radius', (10 / (1920 / window.innerWidth)) + 'px');
		$(':root').css('--size_input', (23 / (1920 / window.innerWidth)) + 'px');
		$(':root').css('--size_radio', (15 / (1920 / window.innerWidth)) + 'px');
		$('.sub').css('height', (77 / (1920 / window.innerWidth)) + 'px');
		$('.sub').css('border-radius', (10 / (1920 / window.innerWidth)) + 'px');
		$('.form_p_two').css('line-height', (18 / (1920 / window.innerWidth)) + 'px');
		$('#window2').css('height', (386 / (1150 / window.innerWidth)) + 'px');
		$('#window2').css('padding-left', (243 / (1920 / window.innerWidth)) + 'px');
		$('#window2').css('padding-right', (243 / (1920 / window.innerWidth)) + 'px');
		$('#window2').css('padding-top', (40 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		$('#window2').css('padding-bottom', (62 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		$('#window2').css('margin-top', (175 / (1920 / window.innerWidth)) + 'px');
		$(':root').css('--border_px', (1 / (1920 / window.innerWidth)) + 'px');
		$('.text_reg').css('margin-bottom', (25 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		$('.text_reg').css('height', (45 / (1920 / window.innerWidth)) + 'px');
		$('.input4').css('margin-bottom', (25 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		$('.pass').css('margin-bottom', (20 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		$('.form_p_two').css('line-height', (12 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		
		$('.sub').css('margin-top', (35 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		$('.sub').css('margin-bottom', (25 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		
		$('.sub2').css('margin-top', (10 / (386 / (window.innerWidth * 0.3359375))) + 'px');
		
		$('.sub2').css('height', (77 / (1920 / window.innerWidth)) + 'px');
		$('.sub2').css('border-radius', (10 / (1920 / window.innerWidth)) + 'px');

		$('.pass').css('margin-right', (54 / (1150 / window.innerWidth)) + 'px');

		$('.figcaption1').css('padding', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption2').css('padding', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption3').css('padding', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption4').css('padding', (5 / (1920 / window.innerWidth)) + 'px');

		$('.figcaption1').css('margin-top', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption2').css('margin-top', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption3').css('margin-top', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption4').css('margin-top', (5 / (1920 / window.innerWidth)) + 'px');

		$('.figcaption1').css('border', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption2').css('border', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption3').css('border', (5 / (1920 / window.innerWidth)) + 'px');
		$('.figcaption4').css('border', (5 / (1920 / window.innerWidth)) + 'px');
	}
});
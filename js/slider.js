$(document).ready(function() {
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	
	output.innerHTML = slider.value;

	slider.oninput = function() {
		Width_slider = window.outerWidth * 0.26173913043478;
		Width_slider_no_pogresh = Width_slider - (Width_slider * 0.049833887043189);
		
		left = ((Width_slider_no_pogresh / this.max) * this.value);
		output.innerHTML = this.value;

		var Width_text_btc = $('.pp').width() + $('.spann').width() + (outerWidth * 0.0043478260869565);
		$('.count_btc').css('width', (Width_text_btc + 'px'));
		if (left + Width_text_btc <= Width_slider) {
			$('.count_btc').css('margin-left', (left + 'px'));
		}	
	}
});
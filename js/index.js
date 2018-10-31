$(document).ready(function(){
	$('.loader-overlay').delay(5000).fadeOut(750);


	$('.marker').click(function(){
		$('.marker').removeClass('markeractive');
		$(this).addClass('markeractive');
	})
	$('#one').click(function(){
		$('.holdertwo').fadeOut(400);
		$('#oner').fadeIn(600);
		$('.logo').fadeOut(400);
		$('#onel').fadeIn(600);
	})
	$('#two').click(function(){
		$('.holdertwo').fadeOut(400);
		$('#twor').fadeIn(600);
		$('.logo').fadeOut(400);
		$('#twol').fadeIn(600);
	})
	$('#three').click(function(){
		$('.holdertwo').fadeOut(400);
		$('#threer').fadeIn(600);
		$('.logo').fadeOut(400);
		$('#threel').fadeIn(600);
	})

	$('.work-x').click(function(){
		$('html, body').animate({
	        scrollTop: $('.main2').offset().top
	    }, 800);
	})

	$('.toggle').click(function(){
		$('.topper').toggleClass('topperactive');
		$('.number').fadeToggle(800);
	})
});
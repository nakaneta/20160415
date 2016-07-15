$(function () {
	/*-------------------------------
  	smooth scroll
  	-------------------------------*/
	$('a[href*=#]').click(function () {
		var speed = 400;
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({
			scrollTop: position
		}, speed, 'swing', function () {
			location.href = href;
		});
		return false;
	});
});
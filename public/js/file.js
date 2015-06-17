$(document).ready(function(){
	$('.handle').on('click', function(){
		$('nav ul').toggleClass('showing');
	});
	$("a").click(function(){
        $('.showing').toggleClass();
    });
});
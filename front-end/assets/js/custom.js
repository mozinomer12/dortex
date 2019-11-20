$(document).ready(function(){
    $('.toggle-menu').click(function(){
        $('.bottom-header-content ul').slideToggle();
    });
    $('.toggle-menu').click(function(){
        $('.toggle-menu').toggleClass('active');
    });
    $('.toggle-search').click(function(){
        $('.header-search').toggleClass('active');
    });
});

	var out = 1;
	$(".pas_how").click(function(){
		console.log('sad');
		if (out) {
			$(this).parent().find("input").attr("type", "text"); 
			out = 0;
			return out;
		}
		if (!out) {
			$(this).parent().find("input").attr("type", "password"); 
			out = 1;
			return out;
		}
	});

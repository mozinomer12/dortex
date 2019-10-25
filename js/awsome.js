$(document).ready( function(e) {
	// adding class active to main selector left side
	$(".main-selector-column ul li a").click(function(e){
		e.preventDefault();
		$('.main-selector-column ul li').removeClass("active");
		$(this).parent().addClass("active")
	})
	// adding class active to inner selector left side
	$(".inner-selector-column ul li a").click(function(e){
		e.preventDefault();
		$('.inner-selector-column ul li').removeClass("active");
		$('.inner-selector-column ul li').closest("li").addClass("next");
		$(this).parent().addClass("active")
	})
})
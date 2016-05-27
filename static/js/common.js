
jQuery(function() {
	jQuery('.reverse-boo')
		.on('mouseenter', function() {
			jQuery(this).animate({opacity: 1},300); 
		})
		.on('mouseleave', function() {
			jQuery(this).animate({opacity: 0.3},500); 
		});
});



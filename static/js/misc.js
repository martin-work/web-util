
function makeSmoothAnchorClick(root,aElement) {
	var jqRoot = jQuery(root)
	var href = jQuery.attr(aElement, 'href');
	if ( ! ( href && href.match(/^#/) ) )
		return;
	jQuery(aElement).on("click", function () {
		jqRoot.animate({
			scrollTop: jQuery(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});
}
function makeSmoothAnchorsClick(root, parent) { 
	var jqParent = jQuery(parent); 
	jqParent.find('a').each(function(){
		var href = jQuery.attr(this, 'href');
		if ( ! ( href && href.match(/^#/) ) )
			return;
		makeSmoothAnchorClick(root,this); 
	});
} 


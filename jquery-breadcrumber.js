(function($){
	jQuery.fn.breadcrumber = function() {
	  return this.each(function(i){
		  var start = 1;
			if(i>start && i<$('.breadcrumb li').length-1){
				$(this).addClass('obscured',"slow").bind('mouseenter',function(e){
						$(this).removeClass('obscured',"slow");
					}).bind('mouseleave',function(e){
						$(this).addClass('obscured',"slow");
					});
			}
	  });
	};  
})(jQuery);
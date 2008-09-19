/*  jquery-breadcrumber.js
*  jquery-breadcrumber
*  
*  Created by Thomas Hanley on 2008-09-19.
*  http://tjhanley.com
*  Copyright 2008 thomas hanley
*  Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/


// ENJOY!

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
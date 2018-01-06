jQuery(document).ready(function () {
	jQuery(window).scroll(function() {    
	    var scroll = jQuery(window).scrollTop();

	    if (scroll >= 500) {
	        jQuery("nav").addClass("fixed");
	    } else {
	        jQuery("nav").removeClass("fixed");
	    }
	});

	var slideIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("slider");
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = "none"; 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	    	// x[slideIndex-1].fadeIn("slow");
	    x[slideIndex-1].style.display = "block"; 
	    setTimeout(carousel, 5000); 
	}
});


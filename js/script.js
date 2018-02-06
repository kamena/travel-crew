jQuery(document).ready(function () {
	jQuery(window).scroll(function() {    
	    var scroll = jQuery(window).scrollTop();

	    if (scroll >= 500) {
	    	jQuery("nav").removeClass("transparent");
	    } else {
	        jQuery("nav").addClass("transparent");
	    }
	});

	

	if(jQuery('body').is('.home')) {
		var slideIndex = 0;
		carousel();
	}

	function carousel(className) {
	    var i;
	    var x = document.getElementsByClassName("slider");
	    for (i = 0; i < x.length; i++) {
	      x[i].classList.add("hidden"); 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	    x[slideIndex-1].classList.remove("hidden"); 
	    setTimeout(carousel, 5000); 
	}

	function openMenu() {
	   var element = document.getElementsByClassName("nav-right");
	   element.classList.add("hidden");
	}

	document.getElementById("menu-toggle").onclick = function() {
	    var x = document.getElementById("top-nav");
	    if (x.className === "nav-right") {
	        x.className += " visible";
	    } else {
	        x.className = "nav-right";
	    }
	};

    jQuery('#login-form-link').click(function(e) {
		jQuery("#login-form").delay(100).fadeIn(100);
 		jQuery("#register-form").fadeOut(100);
		e.preventDefault();
	});

	jQuery('#register-form-link').click(function(e) {
		jQuery("#register-form").delay(100).fadeIn(100);
 		jQuery("#login-form").fadeOut(100);
		e.preventDefault();
	});

});
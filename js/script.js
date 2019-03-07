jQuery(document).ready(function () {
	window.addEventListener("scroll", () => {
		let scroll = window.scrollY;

		if(scroll >= 400) {
			document.querySelector('nav').classList.remove('transparent');
		} else {
			document.querySelector('nav').classList.add('transparent');
		}
	});

	if(document.querySelector('body').classList.contains('home')) {
		var slideIndex = 0;
		carousel();
		setInterval( carousel, 5000 );
	}

	function carousel() {
	    let slides = document.querySelectorAll('.slider');
	    for (let i = 0; i < slides.length; i++) {
	      slides[i].classList.add("hidden");
	    }
	    slideIndex++;
	    if (slideIndex > slides.length) { slideIndex = 1; }
	    slides[slideIndex - 1].classList.remove("hidden");
	}

	const menuToggle = document.querySelector('#menu-toggle');
	const topNav = document.querySelector('#top-nav');
	menuToggle.addEventListener('click', () => {
		topNav.classList.toggle('visible');
	});

	const loginFormButtons = document.querySelectorAll('.form-bottom');
	var next = document.querySelector('#register-form');
	var first = document.querySelector('#login-form');

	loginFormButtons.forEach(formButton => {
		formButton.addEventListener('click', (e) => {
			e.preventDefault();
			setTimeout(()=>{
				next.classList.toggle('fade');
				[first, next] = [next, first];
			}, 100);
			first.classList.toggle('fade');
		});
	});
});

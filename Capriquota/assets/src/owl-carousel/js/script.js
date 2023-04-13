/**********************/
/*	Client carousel   */
/**********************/

jQuery("#blogcarousel").owlCarousel({
	autoplay: true,
	rewind: true,
	/* use rewind if you don't want loop */
	margin: 20,
	/*
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		*/
	responsiveClass: true,
	// autoHeight: true,
	autoplayTimeout: 5000,
	smartSpeed: 500,
	nav: true,
	responsive: {
		0: {
			items: 1
		},

		600: {
			items: 2
		},

		1024: {
			items: 3
		},

		1366: {
			items: 4
		}
	}
});

function showPassword() {
	var password = document.querySelector('#password');
	var passwordIcon = document.querySelector('.password-hide-icon');
	if (password.type === "password") {
		password.type = "text";
		passwordIcon.setAttribute('data-icon', 'clarity:eye-show-solid');
	} else {
		password.type = "password";
		passwordIcon.setAttribute('data-icon', 'clarity:eye-hide-solid');
	}
}

function cvFileName() {
	const actualBtn = document.getElementById('upload-cv-btn');
	const fileChosen = document.getElementById('cv-file-name');
	actualBtn.addEventListener('change', function () {
		fileChosen.textContent = this.files[0].name
	})
}


function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$('.video').parent().click(function () {
	if ($(this).children(".video").get(0).paused) {
		$(this).children(".video").get(0).play();
		$(this).children(".playpause").fadeOut();
	} else {
		$(this).children(".video").get(0).pause();
		$(this).children(".playpause").fadeIn();
	}
});


var stackRedirect = document.querySelectorAll('.engr-stack-img');
for (let k = 0; k <= stackRedirect.length; k++) {
	stackRedirect[k].addEventListener('click', () => {
		location.href = 'CompanyStack.html';
	})
}


function watchCqtVideo() {
	location.href = 'Life@Capriquota.html';
}
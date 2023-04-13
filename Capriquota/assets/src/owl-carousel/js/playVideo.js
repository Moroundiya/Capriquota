$('.video').parent().click(function () {
	if ($(this).children(".video").get(0).paused) {
		$(this).children(".video").get(0).play();
		$(this).children(".playpause").fadeOut();
	} else {
		$(this).children(".video").get(0).pause();
		$(this).children(".playpause").fadeIn();
	}
});

$('#cqt-press-video').parent().click(function () {
	if ($(this).children(".video").get(0).paused) {
		$(this).children(".video").get(0).play();
		$(this).children(".playpause").fadeOut();
	} else {
		$(this).children(".video").get(0).pause();
		$(this).children(".playpause").fadeIn();
	}
});

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


var videoModalBody=document.querySelector('#press-video-modal-body');
videoModalBody.style.overflow="hidden";
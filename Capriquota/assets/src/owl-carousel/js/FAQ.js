
function topFunction() {
	document.body.scrollTop = 0; 
	document.documentElement.scrollTop = 0; 
}


var question1 = document.querySelector('#question1arrow');
var question2 = document.querySelector('#question2arrow');
var question3 = document.querySelector('#question3arrow');
var question4 = document.querySelector('#question4arrow');
var question5 = document.querySelector('#question5arrow');
var answerOpened = document.querySelector('.answerOpened');
var faqAnswer = document.querySelector('.faq-answer');
var faqAnswer2 = document.querySelector('.faq-answer2');
var faqAnswer3 = document.querySelector('.faq-answer3');
var faqAnswer4 = document.querySelector('.faq-answer4');
var faqAnswer5 = document.querySelector('.faq-answer5');
var question1img = document.querySelector('#question1arrowimg');
var question2img = document.querySelector('#question2arrowimg');
var question3img = document.querySelector('#question3arrowimg');
var question4img = document.querySelector('#question4arrowimg');
var question5img = document.querySelector('#question5arrowimg');

question1.addEventListener("click", () => {
	question1.classList.toggle("answerOpened");
	if (question1.classList.contains('answerOpened')) {
		question1img.src = "../assets/src/images/close-answer.png";
		faqAnswer.style.display = "block";
	} else {
		question1img.src = "../assets/src/images/open-answer.png"
		faqAnswer.style.display = "none";
	}
});


question2.addEventListener("click", () => {

    question2.classList.toggle("answerOpened");
	if (question2.classList.contains('answerOpened')) {
		question2img.src = "../assets/src/images/close-answer.png";
		faqAnswer2.style.display = "block";
	} else {
		question2img.src = "../assets/src/images/open-answer.png"
		faqAnswer2.style.display = "none";
	}
});

question3.addEventListener("click", () => {

    question3.classList.toggle("answerOpened");
	if (question3.classList.contains('answerOpened')) {
		question3img.src = "../assets/src/images/close-answer.png";
		faqAnswer3.style.display = "block";
	} else {
		question3img.src = "../assets/src/images/open-answer.png"
		faqAnswer3.style.display = "none";
	}
});


question4.addEventListener("click", () => {

    question4.classList.toggle("answerOpened");
	if (question4.classList.contains('answerOpened')) {
		question4img.src = "../assets/src/images/close-answer.png";
		faqAnswer4.style.display = "block";
	} else {
		question4img.src = "../assets/src/images/open-answer.png"
		faqAnswer4.style.display = "none";
	}
});



question5.addEventListener("click", () => {

    question5.classList.toggle("answerOpened");
	if (question5.classList.contains('answerOpened')) {
		question5img.src = "../assets/src/images/close-answer.png";
		faqAnswer5.style.display = "block";
	} else {
		question5img.src = "../assets/src/images/open-answer.png"
		faqAnswer5.style.display = "none";
	}
});
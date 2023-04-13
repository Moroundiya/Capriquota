function changeStyle() {
  var var1 = document.querySelector('#nav-icon-anim');
  var showNavM = document.querySelector('#collapsibleNavId22');
  var body = document.querySelector('body');
  var1.classList.toggle('open');
  if (var1.classList.contains('open')) {
    showNavM.className = "";
    showNavM.classList.toggle('shownavbarmobile');
    body.style.overflow = "hidden";
  } else {
    showNavM.classList.toggle('hidenavbar');
    body.style.overflow = "auto";
  }
}
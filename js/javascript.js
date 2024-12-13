
/* comportamiento del header */
window.onscroll = function() {toggleSticky()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function toggleSticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

console.log('Hello! Welcome to my portfolio site.')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
    navBar.classList.add('scrolled')
  } else {
    x.className = 'navtoggle'
    navBar.classList.remove('scrolled')
  }
}

var navBar = document.getElementById('navBar')
window.onscroll = function () {
  if (window.scrollY > 22) {
    navBar.classList.add('scrolled')
  } else {
    navBar.classList.remove('scrolled')
  }
}

$('#click_advance').click(function () {
  $('#display_advance').toggle('1000')
  $('i', this).toggleClass('fas fa-bars fas fa-xmark')
})

$('#myvideo').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
})

$('#myvideo2').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
})


var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers", "Containers1");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}

console.log("Hello! Welcome to my portfolio site.")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
    navBar.classList.add('scrolled');
  } else {
    x.className = 'navtoggle';
    navBar.classList.remove('scrolled');
  }
}

var navBar = document.getElementById('navBar');
window.onscroll = function() {
  if(window.scrollY > 22){
    navBar.classList.add('scrolled');
  }else{
    navBar.classList.remove('scrolled');
  }
}

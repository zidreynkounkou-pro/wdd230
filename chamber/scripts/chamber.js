const currentDate = new Date().getFullYear();
document.querySelector('#date').innerHTML = currentDate;

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last modified: ${document.lastModified}`;


// Highlight the current link
const current = window.location.href;
  const  show = document.querySelectorAll('nav a');
 show.forEach(function(link){
  if(link.href === current){
    link.style.backgroundColor = "rgb(46, 117, 179)";
    link.style.color = "#ffffff";
    link.style.fontSize = "18px";
  }});


/*
   For example, you might set focus when a button is clicked:
  document.getElementById("myButton").addEventListener("click", function() {
       myInput.focus();
   }); */

// Hamburger
const nav = document.querySelector('nav');
const button = document.querySelector('#hamburger');

function toggleNav() {
  nav.classList.toggle('show');
  button.classList.toggle('show');
  console.log('Button clicked');
}

button.addEventListener('click', toggleNav);


function checkWindowWidth() {
  if (window.innerWidth > 984) {
    // If window width is greater than 984pxe, remove the 'show' class
    nav.classList.remove('show');
    button.classList.remove('show');
    button.removeEventListener('click', toggleNav);
  } else {
    // If window width is less than 984px and the event listener is not added, add it
    if (window.innerWidth < 984) {
      button.addEventListener('click', toggleNav);
    }
  }
}

// Add an event listener to check the window width when the window is resized
window.addEventListener('resize', checkWindowWidth);


const currentDate = new Date().getFullYear();
document.querySelector('#date').innerHTML = currentDate;

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last modified: ${document.lastModified}`;

// Current link implementation

document.addEventListener("DOMContentLoaded", function(){
  const currentUrl = window.location.pathname;

  // Get all links

  const links = document.querySelectorAll('nav a');

  links.forEach( function (link) {
    if (link.getAttribute('href') === currentUrl)
    {
      link.parentNode.classList.add('current');
    }
  });

});
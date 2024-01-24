const currentDate = new Date().getFullYear();
document.querySelector('#date').innerHTML = currentDate;

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last modified: ${document.lastModified}`;

// Current link implementation
document.addEventListener('DOMContentLoaded', function (){
  const a = document.querySelector('nav a');

  a.focus();
})

/*
   For example, you might set focus when a button is clicked:
  document.getElementById("myButton").addEventListener("click", function() {
       myInput.focus();
   }); */
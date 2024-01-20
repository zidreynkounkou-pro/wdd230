// Find the current date
const today1 = document.querySelector('#date');

const today = new Date();
const currentDate = today.getFullYear();
today1.innerHTML = currentDate;

document.addEventListener("DOMContentLoaded", function () {
  let lastModifiedDate = document.lastModified;
  document.querySelector("#lastModified").innerText = `Last modified: ${lastModifiedDate}`;
});


// Humberger button

const nav = document.querySelector('nav');
const button = document.querySelector('#menu');

button.addEventListener('click', () =>{
  nav.classList.toggle('show');
  button.classList.toggle('show');
});

// Dark mode

const dark = document.querySelector('#dark');
const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const h2Ex = document.querySelector('#h2Ex');
const h1 = document.querySelector('h1');

dark.addEventListener('click', () => {
  if (dark.innerHTML.includes('🕶️')){
    main.style.backgroundColor = 'black';
    main.style.color = 'white';
    h2.style.backgroundColor = '#031926';
    h2Ex.style.backgroundColor = '#031926';
    h1.style.color = 'white';
    dark.innerHTML = '🔆';
  }

  else {
    dark.innerHTML = '🕶️';
    h1.style.color = '#33658a';
    main.style.backgroundColor = 'white';
    h2Ex.style.backgroundColor = '#468189';
    h2.style.backgroundColor = '#468189';
    main.style.color = 'black';
    
  }
});


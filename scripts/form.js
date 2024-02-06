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
const main = document.querySelector('form');
dark.addEventListener('click', () => {
  if (dark.innerHTML.includes('🕶️')){
    main.style.backgroundColor = 'black';
    main.style.color = 'white';
    dark.innerHTML = '🔆';
  }

  else {
    dark.innerHTML = '🕶️';
    main.style.backgroundColor = 'rgba(0,0,0,0.9)';
    main.style.color = 'black';
    
  }
});




// Week 04
const password1 = document.querySelector('#password');
const password2 = document.querySelector('#repeatpassword');
const range = document.querySelector('#rangevalue');
const rate = document.querySelector('#rate');
const email = document.querySelector('#email');
const emailerror = document.querySelector('#emailerror');
const passworderror = document.querySelector('#passworderror');


function validateForm(){

  function validateEmail(){
    const pattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
  
    if (!pattern.test(email.value)){
      emailerror.style.display = 'block';
      email.style.borderBottomColor = 'red';
      return false;
    }
    else {
      emailerror.style.display = 'none'
      return true;
    }
  }
  
  function validatePassword(){
    if (password1.value !== password2.value){
      passworderror.style.display = 'block';
      password1.style.borderBottomColor = 'red';
      password2.style.borderBottomColor = 'red';
      return false;
    }
    else {
      passworderror.style.display = 'none';
      return true;
    }
  }

  const isValidateEmail = validateEmail();
  const isValidatePassword = validatePassword();

  return isValidateEmail && isValidatePassword;

}

// Range value

rate.addEventListener('change', () => {
  range.innerHTML = rate.value;
});
rate.addEventListener('input', () => {
  range.innerHTML = rate.value;
})



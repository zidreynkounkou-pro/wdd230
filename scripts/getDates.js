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
    h2.style.backgroundColor = 'black';
    h2Ex.style.backgroundColor = 'black';
   
    h1.style.color = 'white';
    dark.innerHTML = '🔆';
  }

  else {
    dark.innerHTML = '🕶️';
    h1.style.color = '#33658a';
    main.style.backgroundColor = 'white';
    h2Ex.style.backgroundColor = 'rgba(0, 0 , 0, 0.88)';
    h2.style.backgroundColor = 'rgba(0, 0 , 0, 0.88)';
    main.style.color = 'black';
    
  }
});



// Week 03
const time = document.querySelector('#time');
const now = new Date();
const day = document.querySelector('#day');

day.innerHTML = `Date: ${now.getMonth() + 1}/${now.getUTCDate()}/${now.getFullYear()}`;

/*const hours = now.getHours().toString();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
time.innerHTML =  `Time: ${hours}:${minutes}:${seconds}`; */

// localStorage
const visit = document.querySelector('#visit');
// Check if the 'visits' key exise otherwise, assign it 0.
let visitNumb = Number(window.localStorage.getItem("visits")) || 0;

if (visitNumb !== 0){
  visit.innerHTML = `Visits: ${visitNumb}`;
}

else {
  visit.innerHTML = 'Hey, welcome! This is your fist visit.'
}
// Increment the number of visits by 1.
visitNumb++;
//Store the new number of visits.
window.localStorage.setItem("visits", visitNumb);

// Week 5
const currentWeatherTemp = document.querySelector('#current-temp');
const iconCondition = document.querySelector('#current-weather-icon')
const weatherDescription = document.querySelector('#weather-description');
const lat = -4.28;
const lon = 15.27;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=cdea931d4505dc792d1413a8ff31e208`;

// Fetch the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

// Display the results
function displayResults(data) {
  const temp = `${data.main.temp}`;
  currentWeatherTemp.innerHTML = `${temp}&deg;F`;
  const src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let description = data.weather[0].description;
  iconCondition.setAttribute('alt', 'current weather icon in Brazzaville.');
  iconCondition.setAttribute('loading', 'lazy');
  iconCondition.setAttribute('src', src);
  weatherDescription.textContent = description;
}
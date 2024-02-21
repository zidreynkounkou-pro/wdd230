const currentDate = new Date().getFullYear();
document.querySelector('#date').innerHTML = currentDate;

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last modified: ${document.lastModified}`;


// Highlight the current link
const current = window.location.href;
  const  show = document.querySelectorAll('nav a');
 show.forEach(function(link){
  if(link.href === current){
    link.style.backgroundColor = "#032b43";
    link.style.fontSize = "19px";
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


//------------------Home Page Banner---------------------------

function closeBanner(){
  document.querySelector('#chamber-banner').style.display = 'none';
}

// Find the applicable day

function isApplicableDay(){
  const day = new Date();
  const dayOfWeek = day.getDay();
  return dayOfWeek >= 1 && dayOfWeek <= 3;
}

// Check if the day is applicable, then show the banner

window.onload = function() {
  const banner = document.querySelector('#chamber-banner');
  if (isApplicableDay()){
    banner.style.display = 'flex';
  }
  else {
    banner.style.display = 'none';
  }

}


///////////////////////////////////////////////////////////////////////
const lat = -4.28;
const lon = 15.27;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=cdea931d4505dc792d1413a8ff31e208`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=cdea931d4505dc792d1413a8ff31e208`;

// Fetch the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    const responseForecast = await fetch(urlForecast);
    if (response.ok && responseForecast.ok) {
      const data = await response.json();
      const dataForecast = await responseForecast.json();
      console.log(dataForecast);
      console.log(data);
      displayResults(data, dataForecast);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

// Display the results for the current weather
function displayResults(data, dataForecast) {

  const currentWeatherTemp = document.createElement('div');
  const imgDiv = document.createElement('div');
  const weatherDescription = document.createElement('div');
  const img = document.querySelector('img');
  const weather = document.querySelector('.weather');


  const temp = `${data.main.temp}`;
  currentWeatherTemp.innerHTML = `${temp}&deg;C`;
  const src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let description = data.weather[0].description;
  img.setAttribute('alt', 'current weather icon in Brazzaville.');
  img.setAttribute('loading', 'lazy');
  img.setAttribute('src', src);

  weather.appendChild(currentWeatherTemp);
  imgDiv.appendChild(img);
  weather.appendChild(imgDiv);
  weatherDescription.textContent = description.charAt(0).toUpperCase() + description.slice(1);
  weather.appendChild(weatherDescription);

  // Information about the three days forecast weather

  const d1 = document.createElement('div');
  const d2 = document.createElement('div');
  const d3 = document.createElement('div');
  
  const dat1 = dataForecast.list[8].dt_txt;
  const temp1 = dataForecast.list[8].main.temp;
  d1.innerHTML = `${dat1}, ${temp1}&deg;C`;

  const dat2 = dataForecast.list[16].dt_txt;
  const temp2 = dataForecast.list[16].main.temp;
  d2.innerHTML = `${dat2}, ${temp2}&deg;C`;

  const dat3 = dataForecast.list[24].dt_txt;
  const temp3 = dataForecast.list[24].main.temp;
  d3.innerHTML = `${dat3}, ${temp3}&deg;C`;

  weather.appendChild(d1);
  weather.appendChild(d2);
  weather.appendChild(d3);
}


///////////////////////////Random Members///////////////////////////

const jsonUrl = 'https://zidreynkounkou-pro.github.io/wdd230/chamber/data/members.json';

async function fetchLinks(){
  const response = await fetch(jsonUrl);
  if (response.ok){
    const data = await response.json();
    displayLinks(data);
  }
}

fetchLinks();


function displayLinks(data){
  const silverGoldMembers = data.members.filter(member => member.membership == 'Silver Membership' || member.membership == 'Gold Membership');
  const randomMembers = [];

  while (randomMembers.length < 3 && silverGoldMembers.length > 0) {
    const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
    randomMembers.push(silverGoldMembers.splice(randomIndex, 1)[0]);
  }

  console.log(randomMembers);

  const spotlights = document.querySelector('#spotlights');
  
  spotlights.innerHTML = randomMembers.map(members => `

   <div class="spot-card">
      <h2>${members.name}</h2>
      <img src="${members.logo}" alt="${members.name} logo">
      <p>${members.membership}</p>
      <p>${members.address}</p>
      <p>${members.phone}</p>
      <a href="https://${members.url}" target="_blank">Know More</a>
   </div>
  `).join('');
}

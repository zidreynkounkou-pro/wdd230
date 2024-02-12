const trierGermany = '49.75819899471187, 6.639889842143995';

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// APIs url

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=cdea931d4505dc792d1413a8ff31e208';

// Async funtion
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

// Display the result
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('alt', 'current weather icon in Trier, Germany');
  weatherIcon.setAttribute('loading', 'lazy');
  weatherIcon.setAttribute('src', iconsrc);
  captionDesc.textContent = `${desc}`;
}
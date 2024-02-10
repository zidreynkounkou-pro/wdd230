const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  
  if(response.ok)
  {
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
}

getProphetData();


const displayProphets = (prophets) => {
  prophets.forEach(prophet => {
    const  card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');
    const dateOfBirth = document.createElement('p');
    const placeOfBirth = document.createElement('p');
    // Prophet's full name, birthdate and place of birth
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    dateOfBirth.textContent = `Date of birth: ${prophet.birthdate}`;
    placeOfBirth.textContent = `Place of birth: ${prophet.birthplace}`;

    // Image and attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '295');
    portrait.setAttribute('height', '320');

    //Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(dateOfBirth);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}
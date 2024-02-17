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


// ------------------Directory page------------------------

const jsonUrl = 'https://zidreynkounkou-pro.github.io/wdd230/chamber/data/members.json';
async function fetchMembers() {
  try {
    const response = await fetch(jsonUrl);
    if (response.ok) {
      const data = await response.json();
      displayMembers(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
fetchMembers();

function displayMembers(data){
  const mainDiv = document.querySelector('.dir-cards');

  data.members.forEach(member => {
    const div = document.createElement('div');
    const secondDiv = document.createElement('div')
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const ul = document.createElement('ul');
    const liAddress = document.createElement('li');
    const liPhone = document.createElement('li');
    const liDomain = document.createElement('li');
    const liMembership = document.createElement('li');
    const liUrl = document.createElement('li');
    const a = document.createElement('a');

    const name = member.name;
    const address = member.address;
    const logo = member.logo;
    const membership = member.membership;
    const phone = member.phone;
    const url = member.url;
    const domain = member.domain;

    h2.textContent = name;
    liAddress.textContent = `Address: ${address}`;
    liPhone.textContent = `Phone: ${phone}`;
    liDomain.textContent = `Domain: ${domain}`;
    liMembership.textContent = `Membership Level: ${membership}`;
    liUrl.innerHTML = `<strong>Website's url: ${url}</strong>`;
    img.setAttribute('src', logo);
    img.setAttribute('alt', `${name} logo`);

    div.setAttribute('class', 'first-div')
    secondDiv.setAttribute('class', 'second-div')
    secondDiv.appendChild(h2);
    secondDiv.appendChild(img);
    div.appendChild(secondDiv);
    ul.appendChild(liAddress);
    ul.appendChild(liPhone);
    ul.appendChild(liDomain);
    ul.appendChild(liMembership);
    ul.appendChild(liUrl);
    div.appendChild(ul);
    mainDiv.appendChild(div);

    
  });
}


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const displayImg = document.querySelector('.dir-cards'); //".dir-cards"

listButton.addEventListener("click", () => {
	displayImg.classList.add('dir');
  displayImg.style.display = 'block';
}); 

gridButton.addEventListener('click', () => {
  displayImg.style.display = '';
 displayImg.classList.remove('dir');
});

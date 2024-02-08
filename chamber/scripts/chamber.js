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


// Canlendar


function calendarBody(){

  const calenBody = document.querySelector('.table-body');
  const today = new Date();
  const currentYear = today.getFullYear();
  const thisDay = today.getDate();
  const month = today.getMonth();
  const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
  const firstDay = new Date(currentYear, month, 1).getDay()
  const monthClass = document.querySelector('.month');
  const year = document.querySelector('.year');


  if(month === 0)
  {
    monthClass.innerHTML = 'Jan.';
  }
  else if (month === 1){
    monthClass.innerHTML = 'Feb.';
  }
  else if (month === 2) {
    monthClass.innerHTML = 'Mar.';
  }
  else if (month === 3){
    monthClass.innerHTML = 'Apr.';
  }
  else if (month === 4) {
    monthClass.innerHTML = 'May.';
  }
  else if (month === 5){
    monthClass.innerHTML = 'Jun.';
  }
  else if (month === 6) {
    monthClass.innerHTML = 'Jul.';
  }
  else if (month === 7){
    monthClass.innerHTML = 'Aug.';
  }
  else if (month === 8) {
    monthClass.innerHTML = 'Sep.';
  }
  else if (month === 9){
    monthClass.innerHTML = 'Oct.';
  }
  else if (month === 10) {
    monthClass.innerHTML = 'Nov.';
  }
  else if (month === 11) {
    monthClass.innerHTML = 'Dec.';
  }

  year.innerHTML = currentYear;

  calenBody.innerHTML = "";

  let dayCount = 1;

  for(let i = 0; i < 5; i++){
  const row = document.createElement('tr');
  
  for(let j = 0; j < 7; j++){
    const cell = document.createElement('td');


    /*  The firstDay variable represents the day of the week (0 to 6, where 0 is Sunday)
     on which the first day of the month falls.
      If the current cell is before the first day of the month,
     it means it should be an empty cell. */

    // if the value of dayCount (which represents the day of the month) 
    //has exceeded the total number of days in the current month (daysInMonth). 
    //If dayCount is greater than daysInMonth, 
    //it means we have already filled in all the days of the current month, 
    //and the remaining cells should be empty.

    if ((i === 0 && j < firstDay) || dayCount > daysInMonth){
    // Empty cells before the first day and the last day.
      cell.textContent = "";
    }
  else{

    cell.textContent = dayCount;

    if(dayCount === thisDay)
    {
      cell.classList.add("currentDay");
    
    }

    dayCount++;
  }

  row.appendChild(cell);

  }
  
  calenBody.appendChild(row);
}


}

calendarBody();



// LocalStorage for visits

document.addEventListener("DOMContentLoaded", () =>{
  function getCurrentDate(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${month}-${day}-${year}`;
  }

  // Update and display the latest visit information

  function visitInfornation(){
    const latestVisit = localStorage.getItem('latestVisitDate');
    const currentDate = getCurrentDate();
    const visitDate = document.querySelector('.lastVisit');

    if(latestVisit){
      const latestVisitDate = Math.floor((new Date(currentDate) - new Date(latestVisit)) / (1000 * 60 * 60 * 24));

      if(latestVisitDate === 0){
        //Less than a day
        visitDate.innerHTML = "Back so soon! Awesome";
      }
      else if (latestVisitDate === 1){
        // One day ago visited
        visitDate.innerHTML = "You last visited one day ago.";
      }
      else if (latestVisitDate > 1){
        // More than a day
        visitDate.innerHTML = `You last visited ${latestVisitDate} days ago.`;
      }
      
    }
    else {
      // First visit
      visitDate.innerHTML = "Welcome! Let us know if you have any questions.";
    }
    // Update and store the latest visit date in the latestVistDate variable.
    localStorage.setItem("latestVisitDate", currentDate);
  }

  visitInfornation();
});



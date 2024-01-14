// Find the current date
const today1 = document.querySelector('#date');

const today = new Date();
const currentDate = today.getFullYear();
today1.innerHTML = currentDate;

document.addEventListener("DOMContentLoaded", function () {
  let lastModifiedDate = document.lastModified;
  document.querySelector("#lastModified").innerText = `Last modified: ${lastModifiedDate}`;
});

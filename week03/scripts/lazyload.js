const date = document.querySelector('span');
const lastModified = document.querySelector('.lastModified');

date.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last modified: ${document.lastModified}`;
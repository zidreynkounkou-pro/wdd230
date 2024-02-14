const baseURL = "https://zidreynkounkou-pro.github.io/wdd230/";
const linksURL = "https://zidreynkounkou-pro.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      displayLinks(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

getLinks();



function displayLinks(weeks) {
  const ul = document.querySelector('ul');

  weeks.weeks.forEach(week => {
    const weekNumber = week.week;
    const li = document.createElement('li');
    li.textContent = `${weekNumber}: `;
    const weekLinks = document.createElement('span');
    week.links.forEach((link, index) => {
      const url = link.url;
      const title = link.title;
      const a = document.createElement('a');
      a.setAttribute('href', url);
      a.innerHTML = title;
      
      
      weekLinks.appendChild(a);
      if (index !== week.links.length - 1) {
        weekLinks.appendChild(document.createTextNode(' | '));
      }
    });
    
    li.appendChild(weekLinks);
    ul.appendChild(li);
  });
}
const baseURL = "https://zidreynkounkou-pro.github.io/wdd230/";
const linksURL = "https://zidreynkounkou-pro.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  if(response.ok){
    console.log(data);
  }
  
}

getLinks();
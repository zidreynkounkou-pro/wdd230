const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const p = document.createElement('p');

// Week03
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => { displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != ""){
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList(); // update the local storage with the new array
    input.value = ""; // Empty the input
    input.focus(); // Set the focus back to the input
  }
});


function displayList(item){

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function (){
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
    });
    console.log("I like coding even though it is very challenging sometimes.")
}

function  setChapterList(){
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList(){
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter){
  chapter = chapter.slice(0, chapter.length - 1); // Slice of the last caracter

  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

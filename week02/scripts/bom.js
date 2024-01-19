const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const p = document.createElement('p')
p.textContent = "❌ Error, the input field is empty. Try again!"


button.addEventListener('click', () =>{
  if (input.value != ""){
    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function (){
      list.removeChild(li);
      input.focus();
    });

    input.focus();
    input.value = '';
    list.removeChild(p);
  }

  else {
    list.append(p);
    input.focus();
  }
  
});







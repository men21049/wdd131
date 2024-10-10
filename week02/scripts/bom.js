const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

buttonElement.addEventListener("click",function(){
    
    if(inputElement.value.trim() !== ''){
        const liElement  = document.createElement('li');
        const delButton = document.createElement('button');
        liElement.textContent = inputElement.value;
        delButton.textContent = '❌';
        liElement.appendChild(delButton);
        listElement.appendChild(liElement);

        delButton.addEventListener("click", function(){
            listElement.removeChild(liElement);
        });
    }
    inputElement.value = '';
    inputElement.placeholder = '';
    inputElement.focus();
});
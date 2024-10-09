const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const delButton = document.createElement('button');

li.innerHTML = input.value;
console.log(input.value);
delButton.innerHTML = '❌';

li.append(delButton);

list.append(li);

button.addEventListener("click",list.append(li));
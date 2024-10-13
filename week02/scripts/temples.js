const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

let oLastModif = new Date(document.lastModified);
document.querySelector("#lastmodified").innerHTML = oLastModif;
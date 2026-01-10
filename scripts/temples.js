const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

	console.log('clicked ham');
});

let oLastModif = new Date(document.lastModified);
document.querySelector("#lastmodified").innerHTML = oLastModif;
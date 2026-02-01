const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');
const imagesContainer = document.querySelector('#temples');
const homeLink = document.querySelector('#homeLink');
const oldLink = document.querySelector('#oldLink');
const newLink = document.querySelector('#newLink');
const largeLink = document.querySelector('#largeLink');
const smallLink = document.querySelector('#smallLink');

document.querySelector('#mainSection').textContent = "Home";

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

	console.log('clicked ham');
});

let oLastModif = new Date(document.lastModified);
document.querySelector("#lastmodified").innerHTML = oLastModif;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "2015, May, 25",
    area: 17362,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2005, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Antofagasta Chile",
    location: "Antofagasta, Chile",
    dedicated: "2025, June, 15",
    area: 26163,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg"	
  },
];

homeLink.addEventListener('click',() =>{
	document.querySelector('#mainSection').textContent = "Home";
	loadTemples(temples);
})

oldLink.addEventListener('click', () => {
	document.querySelector('#mainSection').textContent = "Old Temples";
	const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
	loadTemples(oldTemples);
});

newLink.addEventListener('click', () => {
	document.querySelector('#mainSection').textContent = "New Temples";
	const newTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date('2000-01-01'));
	loadTemples(newTemples);
});

largeLink.addEventListener('click', () => {
	document.querySelector('#mainSection').textContent = "Large Temples";
	const largeTemples = temples.filter(temple => temple.area >= 90000);
	loadTemples(largeTemples);
});

smallLink.addEventListener('click', () => {
	document.querySelector('#mainSection').textContent = "Small Temples";
	const smallTemples = temples.filter(temple => temple.area < 10000);
	loadTemples(smallTemples);
});



function loadTemples(filteredtemples){

	document.querySelectorAll('.temple-card').forEach(card => card.remove());
	filteredtemples.forEach(temple => {
	let templeCard = document.createElement('section');
	templeCard.classList.add('temple-card');

	
	templeCard.innerHTML = `
		<figure>
			<img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}" width="250">
			<figcaption>${temple.templeName}
				<p><strong>Location:</strong> ${temple.location}</p>
				<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
				<p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
			</figcaption>
			</figure>
	`;

	imagesContainer.appendChild(templeCard);
	});
}

loadTemples(temples);
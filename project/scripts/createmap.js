const search = document.getElementById("submit");
const results = document.querySelector('.results');
let mapOptions = {
    center:[20.61547, -103.34702],
    zoom:15
}

let map;
let markerGroup;

function drawMap(mapOpt){
    map = new L.map('map',mapOpt);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

    markerGroup = L.featureGroup().addTo(map);    
    
}


function renderMarkers(business){
    markerGroup.clearLayers();
    business.forEach((b) => {
        if(!Array.isArray(b.center) || b.center.length !== 2)return;
 
        const marker = L.marker(b.center);
        const popupHtml = `<div> <strong> ${b.name}</strong><br/> <span>${b.description}</span></div>`;
        marker.bindPopup(popupHtml);
        marker.addTo(markerGroup);
    });
}

document.addEventListener('DOMContentLoaded', async () => {

    if(!localStorage.getItem("locKey")){
        localStorage.setItem("locKey", JSON.stringify(mapOptions));
    }

    drawMap(mapOptions);
    const all = await searchTerm("");
    renderMarkers(all);
    displayResults(all);
});


search.addEventListener('click', async ()=>{
    const input = document.getElementById("input");
    const result = await searchTerm(input.value); 
    renderMarkers(result);
    displayResults(result);
})

async function getData(){
    try {
    const response = await fetch("../project/data/business.json"); 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : Array.isArray(data.businesses) ? data.businesses : [];
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

async function searchTerm(text){

    const businesses = await getData();

    const term = (text ?? "").trim().toLowerCase();

    if(!term) return businesses;
    const matches = businesses.filter((b)=>{
        const name = b.name.toLowerCase();
        const desc = b.description.toLowerCase();
        return name.includes(term) || desc.includes(term);
        }
    )
    return matches;
}

function displayResults(matches){
    
    document.querySelectorAll('.card').forEach(card=> card.remove());

    matches.forEach(business=>{
       let businessCard = document.createElement('div');
       businessCard.classList.add('card');
       
       businessCard.innerHTML = `
            <div class="container">   
                <h4><b>Business Name: ${business.name}</b></h4> 
                <p>Description: ${business.description}</p> 
            </div>`;
    
        results.appendChild(businessCard);
    });
}

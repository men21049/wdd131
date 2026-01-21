let currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;
let oLastModif = new Date(document.lastModified);
document.querySelector("#lastmodified").innerHTML = oLastModif;

let tempString = (document.getElementById("temp").textContent).replace("°C", "").trim();
let windString = document.getElementById("windSpeed").textContent;
let temperature = parseFloat(tempString);
let windSpeed = parseFloat(windString);
let windChillValue = "N/A";

if(temperature <= 10 && windSpeed > 4.8){
    windChillValue = calculateWindChill(temperature, windSpeed);
} 

document.getElementById("windChill").textContent = `${windChillValue} °C`;

function calculateWindChill(temp, windspeed){
    let windChill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(windspeed, 0.16))) + (0.4275 * temp * (Math.pow(windspeed, 0.16)));
    return windChill.toFixed(2);
}


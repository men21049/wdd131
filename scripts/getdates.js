let currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;
let oLastModif = new Date(document.lastModified);
document.querySelector("#lastmodified").innerHTML = oLastModif;
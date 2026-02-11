const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const storage_key = "formKey";

function getStorage() {
  const num = localStorage.getItem(storage_key);
  const counter = parseInt(num,10);
  return Number.isNaN(counter) ? 0 : counter;
}

function setCounter(){
  const num = getStorage() + 1;
  localStorage.setItem(storage_key, num);
}

document.addEventListener('DOMContentLoaded', function() {
  const productList = document.querySelector("#dropdown");
  productList.innerHTML = products.map(product => {
    return `<option value="${product.id}">${product.name}</option>`;
    }).join(""); 

  const form = document.querySelector(".reviewForm");
  form.addEventListener("click", setCounter);
});
   

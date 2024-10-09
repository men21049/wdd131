//loop.js
myInfo = {
    name:"Brother T",
    photo:"images/photo.jpg",
    favoriteFoods:["Fettucini","Steak","Chicken","Shrimp","Baked Portato"],
    hobbies: ["Reading","Fishing","Camping"],
    placesLived:[
        {
            place:"Rexburg,ID",
            length:"5 years",
        },{
            place:"Ammon, ID",
            length:"3 years",
        },
        {
            place: "Sandy, UT",
            length:"1 year",
        },
    ],
};

const foodselement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

function generateListMarkup(list, templateCallback){
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

function foodsTemplate(food){
    return `<li>${food}</li>`;
}

function placesTemplate(place){
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodselement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);

/*function createandAppendFoodItem(food){  
    const foodsElement = document.getElementById('favorite-foods');
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    console.log(food)
    foodsElement.appendChild(favoriteFood);
}*/
//myInfo.favoriteFoods.forEach(createandAppendFoodItem);
//myInfo.favoriteFoods.map((element)=>createandAppendFoodItem(element));
//*console.log(myInfo.favoriteFoods.forEach((element) => createandAppendFoodItem(element)));*/



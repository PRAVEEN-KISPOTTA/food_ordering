const inputSearch = document.querySelector("#search");
const sort = document.querySelector("#sort");
const filter = document.querySelector("#filter");

inputSearch.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        fetchText();
    }
});

function fetchText(){
    console.log(inputSearch.value);
    inputSearch.value = "";
}

// creating menu card
const foodList = document.querySelector("#foodList");
const menuFunc = (img, name, area, category)=>{
    const menuCard = document.createElement("div");
    menuCard.className = "menu-card"
    menuCard.innerHTML = `<div class="food-img">
                                <img src=${img} alt="">
                            </div>
                            <div class="food-details">
                                <div>
                                    <p class="food-name">${name}</p>
                                    <p class="area">${area}</p>
                                </div>
                                <div class="category">
                                    <p>${category}</p>
                                </div>
                            </div>

                            <div>
                                <button type="button">Details</button>
                                <div>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`

                            foodList.appendChild(menuCard);
}


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
function fetchApi(){
    fetch(apiUrl)
    .then((res)=>res.json())
    .then((list)=>{
        console.log(list.meals);
        list.meals.forEach(element => {
            menuFunc(element.strMealThumb, element.strMeal, element.strArea, element.strCategory)
        });
    })
}

fetchApi();
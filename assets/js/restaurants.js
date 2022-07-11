
const searchBtnEl = document.querySelector("#search-button");
const searchInputEl = document.querySelector("#search-input");
const restaurantTitle = document.querySelector("#restaurant-test")



function getParams() {
    //console.log(document.location.search);
    const city = document.location.search.split("=").pop();
    getRestaurants(city);

};


function getRestaurants (city) {

    let getCityIdAPI = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=4&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b95d5ed815mshc7dd19832c693c4p11f823jsndfc45b75b8c8',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    
    fetch(getCityIdAPI, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //works -> console.log(city)
        //console.log(data)
        //console.log(data.data[0].result_object.location_id);
        const cityID = data.data[0].result_object.location_id;
        getRestaurantInfo(cityID);
    });
}

function getRestaurantInfo(cityID) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b95d5ed815mshc7dd19832c693c4p11f823jsndfc45b75b8c8',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=${cityID}&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=mi&limit=5&open_now=true&lang=en_US`, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const restTitleEl = document.querySelector("#rest-1");
        restTitleEl.textContent =  data.data[0].name;
        //for (let i = 0; i < 4; i++){
            //console.log(data);
            //console.log("Name: ", data.data[i].name)
            //restaurantTitle.textContent = data.data[0].name
            //console.log("Address: ", data.data[i].address)
            //console.log("Website: ", data.data[i].website)
            //console.log("Picture: ", data.data[i].photo.images.original.url)
            //localStorage.setItem("test", data.data[i].name);
            //imageEl.setAttribute("src", localStorage.getItem("imate-test"));
        //}

    });
}


// Code for Modal
$(document).ready(function(){
    $('.modal').modal();
})

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
}

getParams()
 
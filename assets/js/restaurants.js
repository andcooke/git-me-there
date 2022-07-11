let searchBtnEl = document.querySelector("#search-button");
let searchInputEl = document.querySelector("#search-input");
let city;
let restaurantAPI; 
let cityID;

// Code for Modal
$(document).ready(function(){
    $('.modal').modal();
})

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
}

searchBtnEl.addEventListener("click", function() {
    city = searchInputEl.value
    if (!city) {
        // window.alert("Please input a city")
        toggleModal();
    } else {
        getRestaurants();
    }
});

function getRestaurants () {
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
        cityID = data.data[0].result_object.location_id;
        getRestaurantInfo();
    });
}

function getRestaurantInfo() {
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
        for (let i = 0; i < 4; i++){
            //console.log(data);
            console.log("Name: ", data.data[i].name)
            console.log("Address: ", data.data[i].address)
            console.log("Website: ", data.data[i].website)
            console.log("Picture: ", data.data[i].photo.images.original.url)
        }
    });
}


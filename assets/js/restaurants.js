let title1El = document.querySelector("#title1");
let title2El = document.querySelector("#title2");
let title3El = document.querySelector("#title3");
let title4El = document.querySelector("#title4");

let img1El = document.querySelector("#img1");
let img2El = document.querySelector("#img2");
let img3El = document.querySelector("#img3");
let img4El = document.querySelector("#img4");

let p1El = document.querySelector("#p1");
let p2El = document.querySelector("#p2");
let p3El = document.querySelector("#p3");
let p4El = document.querySelector("#p4");

let link1El = document.querySelector("#link1");
let link2El = document.querySelector("#link2");
let link3El = document.querySelector("#link3");
let link4El = document.querySelector("#link4");




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
        //const restTitleEl = document.querySelector("#rest-1");
        //restTitleEl.textContent =  data.data[0].name;
        //for (let i = 0; i < 4; i++){
            //console.log(data);
            //console.log("Name: ", data.data[i].name)
            //restaurantTitle.textContent = data.data[0].name
            title1El.textContent = data.data[0].name;
            title2El.textContent = data.data[1].name;
            title3El.textContent = data.data[2].name;
            title4El.textContent = data.data[3].name;

            //console.log("Address: ", data.data[i].address)
            p1El.textContent = data.data[0].address;
            p2El.textContent = data.data[1].address;
            p3El.textContent = data.data[2].address;
            p4El.textContent = data.data[3].address;

            //console.log("Website: ", data.data[i].website)
            link1El.setAttribute("href", data.data[0].website);
            link2El.setAttribute("href", data.data[1].website);
            link3El.setAttribute("href", data.data[2].website);
            link4El.setAttribute("href", data.data[3].website);

            //console.log("Picture: ", data.data[i].photo.images.original.url)
            img1El.setAttribute("src", data.data[0].photo.images.original.url);
            img2El.setAttribute("src", data.data[1].photo.images.original.url);
            img3El.setAttribute("src", data.data[2].photo.images.original.url);
            img4El.setAttribute("src", data.data[3].photo.images.original.url);


            //localStorage.setItem("test", data.data[i].name);
            //imageEl.setAttribute("src", localStorage.getItem("imate-test"));
        // }

    });
}


// // Code for Modal
// $(document).ready(function(){
//     $('.modal').modal();
// })

// function toggleModal(){
//     var instance = M.Modal.getInstance($('#modal3'))
//     instance.open();
// }

getParams()
 
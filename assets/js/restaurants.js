// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "austin" /* document.getElementById().value */);
// encodedParams.append("language", "en_US");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '370f54f2b9msh3011f7c5797392ap1b9f9ejsn697ea2a01f14',
// 		'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };


// function getCityId () {
//     fetch('https://worldwide-restaurants.p.rapidapi.com/typeahead', options)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             console.log(data);
//             console.log(data.results.data[0].result_object.location_id);
//         })
//         .then (getRestaurants())
//         .catch(err => console.error(err));
// }

// getCityId();

let testCityId = "30196";

function getRestaurants () {



    const encodedParams = new URLSearchParams();
    encodedParams.append("language", "en_US");
    encodedParams.append("limit", "5");
    encodedParams.append("location_id", "30196");
    encodedParams.append("currency", "USD");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '370f54f2b9msh3011f7c5797392ap1b9f9ejsn697ea2a01f14',
		'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
	.then(function(response) {
        return response.json();
    })
	.then(function(data) {
        for (let i = 0; i < 5; i ++){
            //console.log(data)
            console.log("Name of Restaurant:", data.results.data[i].name);
            console.log("Image of Restuarant", data.results.data[i].photo.images.small.url)
            console.log("Address of Restaurant:", data.results.data[i].address)
            console.log("Link to Restaurant Website:", data.results.data[i].website);
            console.log("----------------")
        }
    })
	.catch(err => console.error(err));
}

getRestaurants();

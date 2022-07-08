// Use at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources).
var ApiKey = `370f54f2b9msh3011f7c5797392ap1b9f9ejsn697ea2a01f14`;
var citiesUrl = 'https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city';
var bnbApi = 'https://airbnb19.p.rapidapi.com/api/v1/getCategory';
// var walkScoreUrl = 
// var city =

// this is the API call for world cities 
const cityOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '370f54f2b9msh3011f7c5797392ap1b9f9ejsn697ea2a01f14',
		'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com'
	}
};

fetch('https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city', cityOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log(cityOptions);





// this is the API call for airbnb
const bnbOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '70f54f2b9msh3011f7c5797392ap1b9f9ejsn697ea2a01f14',
		'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
	}
};

fetch('https://airbnb19.p.rapidapi.com/api/v1/getCategory', bnbOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log(bnbOptions);








    // Use client-side storage to store persistent data.
let cityInput = "Austin" // document.querySelector("#city-input").value;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b95d5ed815mshc7dd19832c693c4p11f823jsndfc45b75b8c8',
		'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
	}
};

function getCityID () {
fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query=${cityInput}&country=USA`, options)
	.then(response => response.json())
	.then(function(data) {
        //shows city id
        console.log(data.data[0].id);
        let testCityID = data.data[0].id;
        })
	.catch(err => console.error(err));
};
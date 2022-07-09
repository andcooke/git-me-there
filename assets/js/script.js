// Use at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources).
// var wsApiKey = '8d073cbbe64bd87c6d0e21ed06c0c5b3';
// var cityApiKey = `d2e2c17de561fb5216c9679df62394b5`;
// var scoreUrl = 'https://api.walkscore.com/score';
// var cityName = 'http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&appid=${d2e2c17de561fb5216c9679df62394b5}';
var userSearch = ""
var userSearch = prompt("Where do you want to go")
// variables for all the things im searching for

// 'https://api.walkscore.com/score?format=json&
// address=${address}&lat=${lat}&
// lon=${lon}&wsapikey=${wsApiKey}';

function getLatLon(){
// function getLatLon then pass into geoAPI -------does 30 work for limit number? what should this be?

// function and fetch to get lat and lon and pass into function for walk score
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ userSearch + '&appid=d2e2c17de561fb5216c9679df62394b5')    
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var lat = data.coord.lat
        var lon = data.coord.lon
        console.log("this works", lat)
        console.log("this deux works", lon)
        
    
    fetch('https://salty-mountain-68764.herokuapp.com/api.walkscore.com/score?format=json&address=1119%8th%20Avenue%20Seattle%20WA%2098101&lat=' + lat + '&lon=' + lon + '&transit=1&bike=1&wsapikey=8d073cbbe64bd87c6d0e21ed06c0c5b3')
.then(function(response){
    return response.json();

})
.then(function(data){
    console.log(data);
})
});
    };
    
    getLatLon()
    // fetch request for walk score 

    






    // function getWalkScore($lat, $lon, $address) {
    //  $address=urlencode($address);
    //  $url = "https://api.walkscore.com/score?format=json&address=$address";
    //  $url = "&lat=$lat&lon=$lon&wsapikey=YOUR-API-KEY";
    //  $str = @file_get_contents($url);
    //  return $str;
    // }
   
    // $lat = $_GET['lat'];
    // $lon = $_GET['lon'];
    // $address = stripslashes($_GET['address']);
    // $json = getWalkScore($lat,$lon,$address);
    // echo $json;
   
 




// fetch('https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city', cityOptions)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
//     console.log(cityOptions);





// this is the API call for airbnb
// const bnbOptions = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '70f54f2b9msh3011f7c5797392ap1b9f9ejsn697ea2a01f14',
// 		'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
// 	}
// };

// fetch('https://airbnb19.p.rapidapi.com/api/v1/getCategory', bnbOptions)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
//     console.log(bnbOptions);








    // Use client-side storage to store persistent data
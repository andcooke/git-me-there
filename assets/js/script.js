


var userSearch = prompt("Where do you want to go");
// variables for all the things im searching for
var searchinputEl = document.getElementById('search-input');
// var address = searchinputEl.value


function getLatLon(){

    // let userSearch = document.querySelector(".btn");
    // console.log(userSearch, "search fired properly");

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
        
    
    fetch('https://salty-mountain-68764.herokuapp.com/api.walkscore.com/score?format=json&address='+ userSearch +'&lat=' + lat + '&lon=' + lon + '&transit=1&bike=1&wsapikey=8d073cbbe64bd87c6d0e21ed06c0c5b3')
.then(function(response){
    return response.json();

})
.then(function(data){
    console.log(data);
})
});
    };
    
    getLatLon()

    // does query selector go inside or outside the function, before or after
    // let userSearch = document.querySelector(".btn");
    // console.log(userSearch, "search fired properly");


    // add event listener to start button 
    addEventListener

    // appending different parameters to the object 
    







    // Use client-side storage to store persistent data
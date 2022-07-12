
var walkScoreEl = document.getElementById('walking-score');
var bikeScoreEl= document.getElementById('biking-score');
var walkDescription = document.getElementById('walk-description');
var bikeDescription = document.getElementById('bike-description');
var uberEl = document.getElementById('uber')



function getParams (){
   var displayScore = document.location.search.split('=').pop();
   getLatLon(displayScore)
}


function getLatLon(userSearch){

    // let userSearch = document.querySelector(".btn");
    // console.log(userSearch, "search fired properly");

// function and fetch to get lat and lon and pass into function for walk score

fetch('https://api.openweathermap.org/data/2.5/weather?q='+ userSearch + '&appid=d2e2c17de561fb5216c9679df62394b5')    
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //console.log(data);
        var lat = data.coord.lat
        var lon = data.coord.lon
        //console.log("this works", lat)
        //console.log("this deux works", lon)

        fetch('https://salty-mountain-68764.herokuapp.com/api.walkscore.com/score?format=json&address='+ userSearch +'&lat=' + lat + '&lon=' + lon + '&transit=1&bike=1&wsapikey=8d073cbbe64bd87c6d0e21ed06c0c5b3')
        .then(function(response){
            return response.json();


        })
        .then(function(data){
            //console.log(data);
            //console.log(data.bike.score);
            if (data.bike.score < 50 || data.walkscore < 50) {
                uberEl.classList.remove('hidden');
            }
            bikeScoreEl.textContent = data.bike.score;
            bikeDescription.textContent = data.bike.description;
            //console.log(data.walkscore);
            walkScoreEl.textContent = data.walkscore;
            walkDescription.textContent = data.description;
        })
        });
    }


    getParams();

    // does query selector go inside or outside the function, before or after
    // let userSearch = document.querySelector(".btn");
    // console.log(userSearch, "search fired properly");


    // add event listener to start button 


    // appending different parameters to the object 
    
    // var bikeDescription = document.createElement('span')
    // bikeDescription.textContent = data.bike.description;
    // bikeScoreEl.appendChild(bikeDescription)







    // appending different parameters to the object 

    // var bikeDescription = document.createElement('span')
    // bikeDescription.textContent = data.bike.description;
    // bikeScoreEl.appendChild(bikeDescription)
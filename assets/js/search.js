const searchButtonEl = document.querySelector("#search-button");

const handleSearchSubmit = (event) => {
    event.preventDefault();

    let searchInputVal = document.querySelector("#search-input").value;

    if (!searchInputVal) {
        console.error("You need a search input!");
        return;
    }

    let queryString = "./results.html?q=" + searchInputVal;
    
    location.assign(queryString);
};

searchButtonEl.addEventListener("click", handleSearchSubmit);



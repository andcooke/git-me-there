const searchButtonEl = document.querySelector("#search-button");

const handleSearchSubmit = (event) => {
    event.preventDefault();

    let searchInputVal = document.querySelector("#search-input").value;

    if (!searchInputVal) {
        // console.error("You need a search input!");
        toggleModal();
        return;
    }

    let queryString = "./results.html?q=" + searchInputVal;
    
    location.assign(queryString);
};

searchButtonEl.addEventListener("click", handleSearchSubmit);


    // Code for Modal
    //materialize syntax
    $(document).ready(function(){
        $('.modal').modal();
    })
    
    // initial instance - Materialize syntax
    function toggleModal(){
        // target modal
        var instance = M.Modal.getInstance($('#modal3'));
        instance.open();
    }

    searchBtnEl.addEventListener("click", function() {
        city = searchInputEl.value
        if (!city) {
            toggleModal();
        } else {
            getRestaurants();
        }
    });
    
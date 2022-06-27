const container = document.querySelector(".container");


// querySelectorAll => paramtreye uygun olan tüm elementleri bir array şekline getirir. (nodelist)
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const selectedSeatCount = document.getElementById("selectedSeatCount");
const totalPrice = document.getElementById("totalPrice");
const selectedMovie = document.getElementById("movie");


let ticketPrice = parseInt(selectedMovie.value);

populateUI();



function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));


    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }



    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
        selectedMovie.selectedIndex = selectedMovieIndex;
    }
}




function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", parseInt(moviePrice));
}


function updateSelectedSeatCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    // ... => Parametre'nin içerisindeki değerleri kopyalamaya yarar.
    // const arr1 = [1,2,3];
    // const arr2 = [...arr1,4,5]; => [1,2,3,4,5];


    // forEach() => 
    const seatsIndex = [...selectedSeats].map((seat) => { return [...seats].indexOf(seat) });

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    selectedSeatCount.innerText = selectedSeatsCount;
    totalPrice.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("seat") && !event.target.classList.contains("occupied")) {

        event.target.classList.toggle("selected");
        updateSelectedSeatCount();
    }
});


selectedMovie.addEventListener("change", (event) => {

    ticketPrice = parseInt(event.target.value);
    setMovieData(event.target.selectedIndex, event.target.value);
    updateSelectedSeatCount();
});


updateSelectedSeatCount();
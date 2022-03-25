window.addEventListener("DOMContentLoaded", init);

function init() {
    loadData();
}

async function loadData() {
    const response = await fetch("http://mnowak.dk/wp-bikes/wp-json/wp/v2/posts");
    console.log("response2", response);

    const bikeData = await response.json();

    displayBike(bikeData);
}
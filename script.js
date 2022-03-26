const url="http://mnowak.dk/wp-bikes/wp-json/wp/v2/bike";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        displayBikes(data);
    })

function displayBikes(data) {
    data.forEach(showBikes);
}

function showBikes(bikes) {
    const template = document.querySelector("#bike_template").content;
    const clone = template.cloneNode(true);

    clone.querySelector(".bike_details img").src = bikes.image.guid;
    clone.querySelector(".brand").textContent = bikes.brand;
    clone.querySelector(".model").textContent = bikes.title.rendered;
    clone.querySelector(".price").textContent = bikes.price;
    clone.querySelector(".colors").textContent = bikes.color;
    clone.querySelector(".availability").textContent = bikes.availability;

    document.querySelector("#bike_list").appendChild(clone);
}
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

    // color
    clone.querySelector(".color1").style.backgroundColor = bikes.color1;

    if (bikes.color1 === "") {
        clone.querySelector(".color1").textContent = "N/A";
    }

    clone.querySelector(".color2").style.backgroundColor = bikes.color2;
    clone.querySelector(".color3").style.backgroundColor = bikes.color3;
    clone.querySelector(".color4").style.backgroundColor = bikes.color4;
    clone.querySelector(".color5").style.backgroundColor = bikes.color5;
    
    // clone.querySelector(".colors").textContent = bikes.color;
    clone.querySelector(".availability").textContent = bikes.availability;

    document.querySelector("#bike_list").appendChild(clone);

}


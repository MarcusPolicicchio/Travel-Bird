function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.6532, lng: -79.3832 }, // Toronto, Canada
        zoom: 12
    });
}

// Find Route Function (Basic Example)
function findRoute() {
    let start = document.getElementById("startLocation").value;
    let destination = document.getElementById("destination").value;

    if (start === "" || destination === "") {
        alert("Please enter both locations.");
        return;
    }

    alert(`Searching for routes from ${start} to ${destination}...`);
}

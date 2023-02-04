
let latitude = 42;
let longitude = -71;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      let currentLocation = {lat:latitude,lng:longitude}
        let options = {
          zoom: 8,
          center: currentLocation
        }
        let map = new google.maps.Map(document.getElementById('gmp-map'),options)
        let marker = new google.maps.Marker({position: currentLocation, map: map});
      
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }



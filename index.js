
let latitude = 49.1369247;
let longitude = -122.8341621;
let currentLocation;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      currentLocation = {lat:latitude,lng:longitude}
        let options = {
          zoom: 8,
          center: currentLocation
        }
        let map = new google.maps.Map(document.getElementById('gmp-map'),options)
        let marker = new google.maps.Marker({position: currentLocation, map: map});
        navigator.geolocation.watchPosition(function(position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
         
          marker.setPosition({lat: latitude, lng: longitude});
        
          map.setCenter({lat: latitude, lng: longitude});
        });
    });
    
  } 



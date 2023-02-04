
// function to get current location
async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          let currentLocation = {lat: latitude, lng: longitude};
          resolve(currentLocation);
        },
        function(error) {
          reject(error);
        }
      );
    }
  });
}

// shows the map through current location if allowed if not it shows location of fixed lat and long
async function showMap() {
  try {
    let currentLocation = await getCurrentLocation();
    let options = {
      zoom: 12,
      center: currentLocation
    };

    let map = new google.maps.Map(document.getElementById('gmp-map'), options);
    let circle = new google.maps.Circle({ // output a circle as a cuurent location
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 1,
      map: map,
      center: currentLocation,
      radius: 100
    });
    navigator.geolocation.watchPosition(function(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      currentLocation = {lat: latitude, lng: longitude};
      circle.setPosition(currentLocation);
      map.setCenter(currentLocation);
    });
  } catch (error) {
    let currentLocation = {lat:49.2610658,lng:-123.1218001};
    let options = {
      zoom: 12,
      center: currentLocation
    };

    let map = new google.maps.Map(document.getElementById('gmp-map'), options);
 
      map.setCenter(currentLocation);
  }
}
showMap();











async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          let currentLocation = {lat: latitude, lng: longitude};
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          resolve(currentLocation);
        },
        function(error) {
          console.log("hi");
          reject(error);
        }
      );
    }
  });
}
async function showMap() {
  try {
    let currentLocation = await getCurrentLocation();
    let options = {
      zoom: 12,
      center: currentLocation
    };

    let map = new google.maps.Map(document.getElementById('gmp-map'), options);
    let marker = new google.maps.Marker({position: currentLocation, map: map});

    navigator.geolocation.watchPosition(function(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      currentLocation = {lat: latitude, lng: longitude};
      marker.setPosition(currentLocation);
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









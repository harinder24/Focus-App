// function to get current location
let map, marker;
let locationData = [
  {
    name: "StarDollar",
    rating: [2, 5, 5, 3, 4, 1],
    background: "Pop",
    img: [
      "https://i.insider.com/61b0fdd50ee53700184555cf?width=700",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yf6H59J4yX8sdgkAmZCC_Tm7MTf01xoXPA&usqp=CAU",
    ],
    location: [49.25743523738337, -123.1269753072887],
    idInfo:1
  },
  {
    name: "Downtown Library",
    rating: [5, 5, 5, 5, 4, 3, 5],
    background: "silent",
    img: [
      "https://th.bing.com/th/id/R.ed6cc4eddec9ec1b4912237c93e4c865?rik=en5m3RdkWnh1aA&riu=http%3a%2f%2fwww.harvardmagazine.com%2fsites%2fdefault%2ffiles%2fimg%2farticle%2f0315%2fBodleian_1.jpg&ehk=3dIzHRkxlcCInQA67%2f%2foYm9diJHu7vmiQ%2bFWDVtRNkY%3d&risl=1&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.0v2zfmmaVAqUbkUmuWzlfQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3",
    ],
    location: [49.280049, -123.127559],
    idInfo:2
  },
  {
    name: "Vancouver Library",
    rating: [5, 3, 5, 5, 4, 3, 5],
    background: "silent",
    img: [
      "https://i.pinimg.com/originals/42/b6/f4/42b6f489e49f2569cc466ca871646a28.jpg",
      "https://gabreport.com/wp-content/uploads/2014/05/2-WBPL_Interior_1-550x439.jpg",
    ],
    location: [49.251060, -123.062267],
    idInfo:3
  },
  {
    name: "Tea Caffe",
    rating: [5, 3, 2, 1, 4, 3, 5, 3],
    background: "lo-fi",
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blogto.com%2Feat_drink%2F2014%2F02%2Fthe_top_10_coffee_shops_that_serve_booze_in_toronto%2F&psig=AOvVaw3Jl9DNccXKCLBsBWZiUzNW&ust=1675570039207000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCMmvr--vwCFQAAAAAdAAAAABAI",
    ],
    location: [49.269631, -123.033597],
    idInfo:4
  },
  {
    name: "VCC Library",
    rating: [5, 5, 5, 5, 4, 3, 5, 4, 2],
    background: "silent",
    img: [
      "https://www.overseaseducationlane.com/university_galary_images/galary_image_4_1611311258.jpeg",
      "https://i.pinimg.com/736x/18/fa/1d/18fa1de78fec53c19e35ce2d19d40cab--toronto-branches.jpg",
    ],
    location: [49.28159824977371, -123.11085230532682],
    idInfo:5
  },
  {
    name: "Cypress Park",
    rating: [5, 5, 5, 5, 4, 3, 5, 5, 5, 5],
    background: "nature",
    img: [
      "https://parksinsandiego.com/wp-content/uploads/2019/04/cypress-canyon-park-uncovered-picnic-area-1024x768.jpg",
    ],
    location: [49.358847481523966, -123.21076170726549],
    idInfo:6
  },
  {
    name: "Kitsilano Beach",
    rating: [5, 5, 5, 5, 4, 3, 5, 2, 4, 3],
    background: "nature",
    img: [
      "https://th.bing.com/th/id/OIP.YqitGwCgSCegQT8F4pOLTgHaCx?w=315&h=131&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ],
    location: [49.277522282368565, -123.15346887212631],
    idInfo:7
  },
];


function initMap() {
  async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let currentLocation = { lat: latitude, lng: longitude };
            resolve(currentLocation);
          },
          function (error) {
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
        center: currentLocation,
      };
  
      map = new google.maps.Map(document.getElementById("gmp-map"), options);
      let circle = new google.maps.Circle({
        // output a circle as a cuurent location
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0000FF",
        fillOpacity: 1,
        map: map,
        center: currentLocation,
        radius: 100,
      });
      navigator.geolocation.watchPosition(function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        currentLocation = { lat: latitude, lng: longitude };
        circle.setMap(map);
        map.setCenter(currentLocation);
      });
    } catch (error) {
      let currentLocation = { lat: 49.2610658, lng: -123.1218001 };
      let options = {
        zoom: 12,
        center: currentLocation,
      };
  
      map = new google.maps.Map(document.getElementById("gmp-map"), options);
  
      map.setCenter(currentLocation);
      
    }
    
    showLocation(locationData);
    
  }
  
  function showLocation(arrayOfObj) {
    for (let i = 0; i < arrayOfObj.length; i++) {
      let individualLocation = {lat:arrayOfObj[i].location[0], lng : arrayOfObj[i].location[1]}
      marker = new google.maps.Marker({
        position: individualLocation,
        map: map,
        label: {text:arrayOfObj[i].name},
      
        icon: {
          url: arrayOfObj[i].img[0], 
          scaledSize: new google.maps.Size(20, 20),
          anchor: new google.maps.Point(32, 80),
          labelOrigin: new google.maps.Point(30, 30)
        },
      });
  
      marker.title = arrayOfObj[i].idInfo
      marker.setPosition(individualLocation);

      marker.addListener('click', function() {
        alert('Marker clicked: ' + this.title);
      });
    }
    
  }
  showMap();
}




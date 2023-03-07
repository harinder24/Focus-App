document.getElementById("root").innerHTML = `
<div id="fpage">
    
</div>
<div id="spage">
  
</div>
<div id="tpage">

</div>`;
document.getElementById("spage").hidden = true;
function initMap() {
  let map, marker, infoWindow;
  document.getElementById("fpage").innerHTML = `<nav id="nav1">
  <div class="select1">
    <select name="format" id="format">
       <option selected disabled>Background Type</option>
       <option class="options" id="silent">Silent</option>
       <option class="options" id="nature">Nature</option>
       <option class="options" id="pop">Pop</option>
       <option class="options" id="lo-fi">Lo-fi</option>
       <option class="options" id="all">All</option>
    </select>
 </div>
 <div id="book">
  <a onclick='loadtpage()'><span>Bookings</span></a>
 </div>
</nav>

  
  <div style="width: 100%;   height: calc(100vh - 95px);" class="map" id="gmp-map"></div>
  <nav id="foot"><div id="footdiv"><a href="#" id="footname">FOCUS</a></div></nav>`;
  let locationData = [
    {
      name: "StarDollar",
      rating: [2, 5, 5, 3, 4, 1],
      background: "pop",
      logo: "https://www.shareicon.net/data/2015/09/21/644139_pin_512x512.png",
      img: [
        "https://i.insider.com/61b0fdd50ee53700184555cf?width=700",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yf6H59J4yX8sdgkAmZCC_Tm7MTf01xoXPA&usqp=CAU",
      ],
      review: [
        {
          name: "user1",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          name: "user2",
          rating: 3,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
      location: [49.25743523738337, -123.1269753072887],
      idInfo: 101,
    },
    {
      name: "Downtown Library",
      rating: [5, 5, 5, 5, 4, 3, 5],
      background: "silent",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcSGDOS0hkk5shiEcujGF_I7umVEjZ54NPw&usqp=CAU",
      img: [
        "https://th.bing.com/th/id/R.ed6cc4eddec9ec1b4912237c93e4c865?rik=en5m3RdkWnh1aA&riu=http%3a%2f%2fwww.harvardmagazine.com%2fsites%2fdefault%2ffiles%2fimg%2farticle%2f0315%2fBodleian_1.jpg&ehk=3dIzHRkxlcCInQA67%2f%2foYm9diJHu7vmiQ%2bFWDVtRNkY%3d&risl=1&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.0v2zfmmaVAqUbkUmuWzlfQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3",
      ],
      review: [
        {
          name: "user1",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          name: "user2",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
      location: [49.280049, -123.127559],
      idInfo: 102,
    },
    {
      name: "Vancouver Library",
      rating: [5, 3, 5, 5, 4, 3, 5],
      background: "silent",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcSGDOS0hkk5shiEcujGF_I7umVEjZ54NPw&usqp=CAU",
      img: [
        "https://i.pinimg.com/originals/42/b6/f4/42b6f489e49f2569cc466ca871646a28.jpg",
        "https://gabreport.com/wp-content/uploads/2014/05/2-WBPL_Interior_1-550x439.jpg",
      ],
      review: [
        {
          name: "user1",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          name: "user2",
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
      location: [49.25106, -123.062267],
      idInfo: 103,
    },
    {
      name: "Tea Caffe",
      rating: [5, 3, 2, 1, 4, 3, 5, 3],
      background: "lo-fi",
      logo: "https://www.shareicon.net/data/2015/09/21/644139_pin_512x512.png",
      img: [
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg",
        "https://s3.amazonaws.com/images.ecwid.com/images/59136005/2215573344.jpg",
      ],
      review: [
        {
          name: "user1",
          rating: 3,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          name: "user2",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
      location: [49.269631, -123.033597],
      idInfo: 104,
    },
    {
      name: "VCC Library",
      rating: [5, 5, 5, 5, 4, 3, 5, 4, 2],
      background: "silent",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcSGDOS0hkk5shiEcujGF_I7umVEjZ54NPw&usqp=CAU",
      img: [
        "https://www.overseaseducationlane.com/university_galary_images/galary_image_4_1611311258.jpeg",
        "https://i.pinimg.com/736x/18/fa/1d/18fa1de78fec53c19e35ce2d19d40cab--toronto-branches.jpg",
      ],
      review: [
        {
          name: "user1",
          rating: 2,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          name: "user2",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
      location: [49.28159824977371, -123.11085230532682],
      idInfo: 105,
    },
    {
      name: "Cypress Park",
      rating: [5, 5, 5, 5, 4, 3, 5, 5, 5, 5],
      background: "nature",
      logo: "https://logodix.com/logo/403654.png",
      img: [
        "https://parksinsandiego.com/wp-content/uploads/2019/04/cypress-canyon-park-uncovered-picnic-area-1024x768.jpg",
      ],
      review: [
        {
          name: "user1",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          name: "user2",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
      location: [49.358847481523966, -123.21076170726549],
      idInfo: 106,
    },
    {
      name: "Kitsilano Beach",
      rating: [5, 5, 5, 5, 4, 3, 5, 2, 4, 3],
      background: "nature",
      logo: "https://logodix.com/logo/403654.png",
      img: [
        "https://th.bing.com/th/id/OIP.YqitGwCgSCegQT8F4pOLTgHaCx?w=315&h=131&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
      review: [
        {
          name: "user1",
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          name: "user2",
          rating: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
      location: [49.277522282368565, -123.15346887212631],
      idInfo: 107,
    },
  ];
  if (localStorage.getItem("locationData")) {
    locationData = JSON.parse(localStorage.getItem("locationData"));
  } else {
    localStorage.setItem("locationData", JSON.stringify(locationData));
  }
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
  let currentLocation;
  let options;
  // shows the map through current location if allowed if not it shows location of fixed lat and long
  async function showMap() {
    try {
      currentLocation = await getCurrentLocation();
      options = {
        mapId: "4c8324ad947dde68",
        zoom: 10.5,
        center: currentLocation,
      };

      map = new google.maps.Map(document.getElementById("gmp-map"), options);
      let circle = new google.maps.Circle({
        // output a circle as a cuurent location
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0000FF",
        fillOpacity: 0.2,
        map: map,
        center: currentLocation,
        radius: 100,
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
      let individualLocation = {
        lat: arrayOfObj[i].location[0],
        lng: arrayOfObj[i].location[1],
      };
      marker = new google.maps.Marker({
        position: individualLocation,
        map: map,
        label: { text: arrayOfObj[i].name },

        icon: {
          url: arrayOfObj[i].logo,
          scaledSize: new google.maps.Size(30, 30),
          // anchor: new google.maps.Point(32, 80),
          labelOrigin: new google.maps.Point(30, 35),
        },
      });
      let numOfRating = 0;
      let star = 0;
      for (let j = 0; j < arrayOfObj[i].rating.length; j++) {
        numOfRating += arrayOfObj[i].rating[j];
      }
      numOfRating = numOfRating / arrayOfObj[i].rating.length;
      let updatedLocationList = JSON.parse(
        localStorage.getItem("locationData")
      );
      updatedLocationList[i].ratingPercent = numOfRating;
      localStorage.setItem("locationData", JSON.stringify(updatedLocationList));
      while (numOfRating != 0) {
        if (numOfRating - 1 > 0) {
          numOfRating--;
          star++;
        } else {
          if (numOfRating >= 0.5) {
            numOfRating--;
            star++;
          } else {
            numOfRating = 0;
          }
        }
      }
      let imgStarString = "";
      for (let j = 0; j < star; j++) {
        imgStarString += `<span id="ffstar">&#9733;</span>`;
      }
      for (let j = star; j < 5; j++) {
        imgStarString += `<span id="eestar">&#9733;</span>`;
      }
      let content = `<div class="buttonClick" style="text-align:center;"><img src = ${arrayOfObj[i].img[0]} width="100px"><div> <b>${arrayOfObj[i].name}</b></div><div><b>Ratings: </b>${imgStarString}</div><div id="${arrayOfObj[i].idInfo}" onclick = "idk(this)" ><button class="btn0">Book!</button></div></div>`;

      marker.title = arrayOfObj[i].idInfo;
      marker.setPosition(individualLocation);
      // marker.addListener("mouseover", function () {
      //   let infoWindow = new google.maps.InfoWindow({
      //     content: content,
      //     position: individualLocation,
      //   });
      //   infoWindow.open(map);

      // });

      marker.addListener("click", function () {
        infoWindow = new google.maps.InfoWindow({
          content: content,
          position: individualLocation,
        });
        infoWindow.open(map);
      });
    }
  }

  showMap();
  const select = document.getElementById("format");
  select.addEventListener("change", function () {
    const selectedOption = select.options[select.selectedIndex];

    map = new google.maps.Map(document.getElementById("gmp-map"), options);

    map.setCenter(currentLocation);
    if (selectedOption.id == "all") {
      showLocation(locationData);
    } else {
      let myArr = [];
      for (let i = 0; i < locationData.length; i++) {
        if (locationData[i].background == selectedOption.id) {
          myArr.push(locationData[i]);
        }
      }
      showLocation(myArr);
    }
  });
}

function idk(id) {
  localStorage.setItem("target", JSON.stringify(id.id));
  loadspage();
}
function locationInit() {
  document.getElementById(
    "spage"
  ).innerHTML = `<div id="spagemain"><nav style="padding-bottom: 20px;">
  <ul class="ul1">
      <li class="li1">
      <a href="./index.html" id="stof"'> <b>&laquo; Back </b></a>
      </li>
      <li style="float:right" class="li1">
          <a href="#" id="stoh" onclick='loadtpage()'>Bookings</a>
      </li>
  </ul>
</nav>
<div id="lname">

</div>
<br>
<div id="pic" style="text-align: center;">
</div>
  <div id="vl"></div>
  <div id = "mmenu">
  <div id="menu">
    <button id="menu-button"><div id="menu-icon"></div></button>
  </div>
  <div id="mnav">
<ul class="ul1">
  <li style="width: 33.333%;" class="li1">
    <a id="review">Reviews</a> 
  </li>
  <li style="width: 33.333%;" class="li1">
    <a id="books">Book Session</a> 
  </li>
  <li style="width: 33.333%;"class="li1">
    <a id="add">Add Review</a> 
  </li>
</ul>
</div>
</div>
   
</div>
<br>
<div class="center-div" id="rev">      
</div>
<div class="center-div" id="booking">


</div>
<div class="center-div" id="wrev">


</div><div>
<br>
<br>
</div></div>
`;
 let menuButton = document.getElementById("menu-button");

  let mnav = document.getElementById("mnav");
let menubool = true;
menuButton.addEventListener("click", async function() {
  if(menubool){
    mnav.classList.remove("hide");
    mnav.classList.add("open");
    document.getElementById('menu-icon').classList.toggle("active")
    menubool = false
  }
  else{
    mnav.classList.add("hide")
    setTimeout(function(){
      mnav.classList.remove("open");
  }, 500);
    
    document.getElementById('menu-icon').classList.remove("active")
    
    menubool = true;
  }
  
});




  let target = JSON.parse(localStorage.getItem("target"));
  let allLocationInfo = JSON.parse(localStorage.getItem("locationData"));
  let locationInfo;
  for (let i = 0; i < allLocationInfo.length; i++) {
    if (allLocationInfo[i].idInfo == target) {
      locationInfo = allLocationInfo[i];
      break;
    }
  }
  let truth = false;
  let slideshowContainer = document.createElement("div");
  slideshowContainer.classList.add("slideshow-container");

  let mySlides = [];

  for (let i = 0; i < locationInfo.img.length; i++) {
    let slide = document.createElement("div");
    slide.classList.add("mySlides", "fade");

    let numberText = document.createElement("div");
    numberText.classList.add("numbertext");
    numberText.textContent = i + 1 + " / " + locationInfo.img.length;
    slide.appendChild(numberText);

    let image = document.createElement("img");
    image.src = locationInfo.img[i];

    // image.style.width = "100%";
    slide.appendChild(image);

    mySlides.push(slide);
    slideshowContainer.appendChild(slide);
  }

  let prevButton = document.createElement("a");
  prevButton.classList.add("prev");
  prevButton.textContent = "❮";
  prevButton.onclick = function () {
    plusSlides(-1);
  };
  slideshowContainer.appendChild(prevButton);

  let nextButton = document.createElement("a");
  nextButton.classList.add("next");
  nextButton.textContent = "❯";
  nextButton.onclick = function () {
    plusSlides(1);
  };
  slideshowContainer.appendChild(nextButton);
  let pic = document.getElementById("pic");
  pic.appendChild(slideshowContainer);

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";
   
  }
  document.getElementById(
    "lname"
  ).innerHTML = `<b><i>${locationInfo.name}</i></b>`;
  showSlides();

  function loadReview() {
    let numOfRating = 0;
    let star = 0;
    for (let j = 0; j < locationInfo.rating.length; j++) {
      numOfRating += locationInfo.rating[j];
    }
    numOfRating = numOfRating / locationInfo.rating.length;
    while (numOfRating != 0) {
      if (numOfRating - 1 > 0) {
        numOfRating--;
        star++;
      } else {
        if (numOfRating >= 0.5) {
          numOfRating--;
          star++;
        } else {
          numOfRating = 0;
        }
      }
    }
    let imgStarString = "";
    for (let j = 0; j < star; j++) {
      imgStarString += `<span id="fstar">&#9733;</span>`;
    }
    for (let j = star; j < 5; j++) {
      imgStarString += `<span id='estar'>&#9733;</span>`;
    }

    let rev = document.getElementById("rev");
    imgStarString = `<div style="padding-bottom:10px;"><b><i>Rating</i></b> ${imgStarString}</div>`;
    let reviewSection = "";
    for (let i = locationInfo.review.length - 1; i >= 0; i--) {
      let imgStarStringuser = "";
      for (let j = 0; j < locationInfo.review[i].rating; j++) {
        imgStarStringuser += "<span id='ffstar'>&#9733;</span>";
      }
      for (let j = locationInfo.review[i].rating; j < 5; j++) {
        imgStarStringuser += "<span id='eestar'>&#9733;</span>";
      }
      reviewSection += `<div class="message"><i>${locationInfo.review[i].name}~</i>${imgStarStringuser}<br><p>${locationInfo.review[i].content}</p></div>`;
    }
    rev.innerHTML = imgStarString + reviewSection;
  }
  let numRating = 5;
  function writeReview() {
    // const ratingContainer = document.createElement("div");
    // ratingContainer.classList.add("rating");
    let starsString =
      "<div class = 'rating'><b><i style='color: white;'>How was your experience</i><b><br>";
    for (let i = 0; i < 5; i++) {
      starsString += "<span class = 'star'>&#9733;</span>";
    }
    starsString += `</div><div class="review-box"><textarea id="userInput" placeholder="Write your review here"></textarea><div id='bravo'><br></div><button id="btn1">Submit</button></div>`;

    document.getElementById("wrev").innerHTML = starsString;
    const rating = document.querySelector(".rating");
    const stars = Array.from(rating.querySelectorAll(".star"));

    rating.addEventListener("click", (e) => {
      const index = stars.indexOf(e.target);
      stars.forEach((star, i) => {
        if (i <= index) {
          star.style.color = "#f2b01e";
        } else {
          star.style.color = "#bbb";
        }
      });
      numRating = index + 1;
      truth = true;
    });

    btn1.addEventListener("click", function () {
      let input = document.getElementById("userInput").value;
      if (truth === true) {
        if (input == "") {
          for (let i = 0; i < allLocationInfo.length; i++) {
            if (allLocationInfo[i].idInfo == target) {
              allLocationInfo[i].rating.push(numRating);
              locationInfo = allLocationInfo[i];
              localStorage.setItem(
                "locationData",
                JSON.stringify(allLocationInfo)
              );
              break;
            }
          }
        } else {
          for (let i = 0; i < allLocationInfo.length; i++) {
            if (allLocationInfo[i].idInfo == target) {
              allLocationInfo[i].rating.push(numRating);
              allLocationInfo[i].review.push({
                name: "tester",
                rating: numRating,
                content: input,
              });
              locationInfo = allLocationInfo[i];
              localStorage.setItem(
                "locationData",
                JSON.stringify(allLocationInfo)
              );
              break;
            }
          }
        }
        document.getElementById("userInput").value = "";
        numRating = 5;
        let bravo = document.getElementById("bravo");
        bravo.innerHTML = "Bravo! Thanks for review";
        bravo.style.color = "green";
        truth = false;
      } else {
        let bravo = document.getElementById("bravo");
        bravo.innerHTML = "Choose a rating!";
        bravo.style.color = "red";
      }
    });
  }
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  let userDate = yyyy + "-" + mm + "-" + dd;
  today = yyyy + "-" + mm + "-" + dd;

  let locationAvailability = [
    {
      hour: 9,
      data: '<option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>',
    },
    {
      hour: 10,
      data: '<option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>',
    },
    {
      hour: 11,
      data: '<option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>',
    },
    {
      hour: 12,
      data: '<option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>',
    },
    {
      hour: 13,
      data: '<option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>',
    },
    {
      hour: 14,
      data: '<option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>',
    },
    {
      hour: 15,
      data: '<option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>',
    },
    {
      hour: 16,
      data: '<option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>',
    },
    {
      hour: 17,
      data: '<option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>',
    },
    {
      hour: 18,
      data: ' <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>',
    },
  ];

  function booking() {
    document.getElementById(
      "booking"
    ).innerHTML = `<div><i><b>Pick a Date</i></b></div><input type="date" id="datepicker" min="${today}"><br><br><div id="ssession"><div><i><b>Pick a Session</i></b></div><div id="session"><select id="appointmentTime" name="appointmentTime" required></select></div></div>`;
  

      document.getElementById("datepicker").value = userDate;
    
    const dateInput = document.getElementById("datepicker");
    dateInput.addEventListener("change", (event) => {
      userDate = event.target.value
      
      let hour = new Date().getHours();
      if (userDate == today && hour >= 18) {
        
        let session = document.getElementById("ssession");
        session.innerHTML = "<b>No available session for this date</b>";
     
      } else {
        
        let appointmentTime = document.getElementById("appointmentTime");
       
        appointmentTime.innerHTML = null; 
        if (userDate == today) {
      
          for (let i = 0; i < locationAvailability.length; i++) {
            if (hour < locationAvailability[i].hour) {
                         
              appointmentTime.innerHTML += locationAvailability[i].data;
            }
          }
        } else {
          for (let i = 0; i < locationAvailability.length; i++) {
           
            appointmentTime.innerHTML += locationAvailability[i].data;
          }
        }}
    });
    locationAvailabilityInit();
    function locationAvailabilityInit() {

      let hour = new Date().getHours();
      if (userDate == today && hour >= 18) {
        let session = document.getElementById("ssession");
        session.innerHTML = "<b>No available session for this date</b>";
 
      } else {
        if (userDate == today) {
          for (let i = 0; i < locationAvailability.length; i++) {
            if (hour < locationAvailability[i].hour) {
              let appointmentTime = document.getElementById("appointmentTime");
              appointmentTime.innerHTML += locationAvailability[i].data;
            }
          }
        } else {
          for (let i = 0; i < locationAvailability.length; i++) {
            let appointmentTime = document.getElementById("appointmentTime");
            appointmentTime.innerHTML += locationAvailability[i].data;
          }
        }
        let session = document.getElementById("session");
        session.innerHTML += `<br><br><div><button id='btn2'>Book!</button></div><br><span id="btn2Result"></span>`;
        document.getElementById("btn2").addEventListener("click", function () {
          let bool = false;
          let date = document.querySelector("#datepicker").value;
          let timing = document.querySelector("#appointmentTime").value;
          let location = locationInfo.name;
          let image = locationInfo.img[0];
          let myObj = {
            date: date,
            time: timing,
            location: location,
            img: image,
          };
          if (localStorage.getItem("booking") == null) {
            localStorage.setItem("booking", JSON.stringify([myObj]));
            let output = document.getElementById("btn2Result");
            output.innerHTML = "Successfully Booked!";
            output.style.color = "#176317";
          } else {
            let booking = JSON.parse(localStorage.getItem("booking"));
            for (let i = 0; i < booking.length; i++) {
              if (booking[i].date == myObj.date) {
                if (booking[i].time == myObj.time) {
                  bool = true;
                }
              }
            }
            if (bool) {
              let output = document.getElementById("btn2Result");
              output.innerHTML =
                "You already have booked on exact time and date";
              output.style.color = "darkred";
            } else {
              booking.push(myObj);
              localStorage.setItem("booking", JSON.stringify(booking));
              let output = document.getElementById("btn2Result");
              output.innerHTML = "Successfully Booked!";
              output.style.color = "#176317";
            }
          }
        });
      }
    }
  }

  document.getElementById("review").addEventListener("click", function () {
    document.getElementById("rev").hidden = false;
    document.getElementById("booking").innerHTML = null;
    document.getElementById("booking").hidden = true;
    document.getElementById("wrev").innerHTML = null;
    document.getElementById("wrev").hidden = true;
    loadReview();
    document.getElementById('rev').scrollIntoView({
      behavior: 'smooth'
    });
  });
  document.getElementById("add").addEventListener("click", function () {
    document.getElementById("wrev").hidden = false;
    document.getElementById("booking").innerHTML = null;
    document.getElementById("booking").hidden = true;
    document.getElementById("rev").innerHTML = null;
    document.getElementById("rev").hidden = true;
    writeReview();
    document.getElementById('wrev').scrollIntoView({
      behavior: 'smooth'
    });
  });
  document.getElementById("books").addEventListener("click", function () {
    document.getElementById("booking").hidden = false;
    document.getElementById("wrev").innerHTML = null;
    document.getElementById("wrev").hidden = true;
    document.getElementById("rev").innerHTML = null;
    document.getElementById("rev").hidden = true;
    booking();
    document.getElementById('booking').scrollIntoView({
      behavior: 'smooth'
    });
  });
  document.getElementById("booking").hidden = false;
  document.getElementById("rev").hidden = true;
  document.getElementById("wrev").hidden = true;
  booking();
  const dateField = document.getElementById("datepicker");
  dateField.addEventListener("change", function () {
    userDate = dateField.value;
    booking();
  });
}
function bookinginit() {
  document.getElementById("tpage").innerHTML = `
  <div id="bookingheight">
  <nav style="padding-bottom: 20px;">
  <ul class="ul2">
      <li class="li2">
        
          <button id="anb" onclick="fpageinit()"> <b>&laquo; Home</b></button>
         
      </li>
      
  </ul>
</nav>
<div id="outputbooking">
</div>
</div>`;
  if (localStorage.getItem("booking")) {
    let bookingArray = JSON.parse(localStorage.getItem("booking"));
    let outputString = "";
    let num = 0;
    for (let i = bookingArray.length - 1; i >= 0; i--) {
      outputString += `<div><div class="content2"><div class="left"><h4><i>Location: ${bookingArray[num].location}</i></h4><h4><i>Date: ${bookingArray[i].date}</i></h4><h4><i>Time: ${bookingArray[i].time}</i></h4></div><div class="right"><img src="${bookingArray[i].img}"><br><br><button id=${i} class='cancel'>Cancel</button></div></div></div>`;
      num++;
    }
    document.getElementById("outputbooking").innerHTML = outputString;
    let bubble = document.getElementById("outputbooking");

    bubble.addEventListener("click", (event) => {
      const isButton = event.target.nodeName === "BUTTON";
      if (isButton) {
        let data = event.target.id;
        if (bookingArray.length == 1 && data == 0) {
          localStorage.removeItem("booking");
          bookinginit();
        } else {
          bookingArray.splice(data, 1);
          localStorage.setItem("booking", JSON.stringify(bookingArray));
          bookinginit();
        }
      }
    });
  } else {
    document.getElementById("outputbooking").innerHTML = "No Bookings";
  }
}
function loadspage() {
  document.getElementById("spage").hidden = false;
  document.getElementById("fpage").innerHTML = null;
  document.getElementById("tpage").innerHTML = null;
  locationInit();
}
function loadtpage() {
  document.getElementById("fpage").innerHTML = null;
  document.getElementById("spage").innerHTML = null;
  document.getElementById("spage").hidden = true;
  bookinginit();
}
function fpageinit() {
  document.getElementById("spage").innerHTML = null;
  document.getElementById("tpage").innerHTML = null;
  document.getElementById("tpage").hidden = null;
  initMap();
}

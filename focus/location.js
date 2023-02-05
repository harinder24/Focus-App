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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
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
    imgStarString +=
      `<span id="fstar">&#9733;</span>`;
  }
  for (let j = star; j < 5; j++) {
    imgStarString +=
      `<span id='estar'>&#9733;</span>`;
  }
  let rev = document.getElementById("rev");
  imgStarString = `<div><b><i>Rating</i></b> ${imgStarString}</div>`;
  let reviewSection = "";
  for (let i = locationInfo.review.length - 1; i >= 0; i--) {
    reviewSection += `<div class="message"><i>${locationInfo.review[i].name}~</i><br><p>${locationInfo.review[i].content}</p></div>`;
  }
  rev.innerHTML = imgStarString + reviewSection;
}
let numRating = 5;
function writeReview() {
  // const ratingContainer = document.createElement("div");
  // ratingContainer.classList.add("rating");
  let starsString = "<div class = 'rating'><h2><i style='color: white;'>How was your experience</i></h2>";
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
            localStorage.setItem("locationData", JSON.stringify(allLocationInfo))
            break;
          }
        }
      } else {
        for (let i = 0; i < allLocationInfo.length; i++) {
          if (allLocationInfo[i].idInfo == target) {
            allLocationInfo[i].rating.push(numRating);
            allLocationInfo[i].review.push({ name: "tester", content: input });
            locationInfo = allLocationInfo[i];
            localStorage.setItem("locationData", JSON.stringify(allLocationInfo))
            break;
          }
        }
      }
      input = "";
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
  { hour: 9, data: '<option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>' },
  { hour: 10, data: '<option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>' },
  { hour: 11, data: '<option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>' },
  { hour: 12, data: '<option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>' },
  { hour: 13, data: '<option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>' },
  { hour: 14, data: '<option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>' },
  { hour: 15, data: '<option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>' },
  { hour: 16, data: '<option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>' },
  { hour: 17, data: '<option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>' },
  { hour: 18, data: ' <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>' },
];

      
function booking() {
  document.getElementById("booking").innerHTML = `<div><i><b>Pick a Date</i></b></div><input type="date" id="datepicker" min="${userDate}"><br><br><div><i><b>Pick a Session</i></b></div><div id="session"><select id="appointmentTime" name="appointmentTime" required></div>`;
  if(document.querySelector("#datepicker").value == "" ){
    document.querySelector("#datepicker").value = today
  }
  userDate = document.querySelector("#datepicker").value;
  let hour = new Date().getHours()
  if(hour >= 18){
    let session = document.getElementById("session")
    session.innerHTML = "<b>No available session for this date</b>"
    session.style.color = "red"
  }else{
    for(let i = 0; i < locationAvailability.length;i++){
      if(hour < locationAvailability[i].hour){
        let appointmentTime = document.getElementById("appointmentTime")
        appointmentTime.innerHTML += locationAvailability[i].data
      }
    }
    let session = document.getElementById("session")
        session.innerHTML += `<div id="btn2Result"><br></div><div><button id='btn2'>Book!</button></div>`
        document.getElementById("btn2").addEventListener('click',function () {
          let bool = false;
          let date = document.querySelector("#datepicker").value
          let timing = document.querySelector("#appointmentTime").value
          let location = locationInfo.name
          let image = locationInfo.img[0]
          let myObj = {date: date,time: timing,location:location,img:image}
          if(localStorage.getItem("booking") == null){
            localStorage.setItem("booking", JSON.stringify([myObj])) 
            let output = document.getElementById("btn2Result")
            output.innerHTML = "Successfully Booked!"
            output.style.color = "green"
          }
          else{
            let booking = JSON.parse(localStorage.getItem("booking"));
            for (let i = 0; i < booking.length; i++) {
              if(booking[i].date == myObj.date){
                if(booking[i].time == myObj.time){
                  bool = true
                }
              }
              
            }
            if(bool){
              let output = document.getElementById("btn2Result")
              output.innerHTML = "You already have booked on exact time and date"
              output.style.color = "red"
            }else{
              booking.push(myObj)
              localStorage.setItem("booking", JSON.stringify(booking))
              let output = document.getElementById("btn2Result")
              output.innerHTML = "Successfully Booked!"
              output.style.color = "green"
            }
          }
        })
  }

}

document.getElementById("review").addEventListener("click", function () {
  document.getElementById("booking").innerHTML = null;
  document.getElementById("wrev").innerHTML = null;
  loadReview();
});
document.getElementById("add").addEventListener("click", function () {
  document.getElementById("booking").innerHTML = null;
  document.getElementById("rev").innerHTML = null;
  writeReview();
});
document.getElementById("book").addEventListener("click", function () {
  document.getElementById("wrev").innerHTML = null;
  document.getElementById("rev").innerHTML = null;
  booking();
});
booking()
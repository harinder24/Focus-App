let target = JSON.parse(localStorage.getItem("target"))
let allLocationInfo = JSON.parse(localStorage.getItem("locationData"))
let locationInfo;
for (let i = 0; i < allLocationInfo.length; i++) {
    if(allLocationInfo[i].idInfo == target){
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
  numberText.textContent = (i + 1) + " / " + locationInfo.img.length;
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
prevButton.onclick = function() {
  plusSlides(-1);
};
slideshowContainer.appendChild(prevButton);

let nextButton = document.createElement("a");
nextButton.classList.add("next");
nextButton.textContent = "❯";
nextButton.onclick = function() {
  plusSlides(1);
};
slideshowContainer.appendChild(nextButton);
let pic = document.getElementById("pic")
pic.appendChild(slideshowContainer);

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
document.getElementById('lname').innerHTML = `<b><i>${locationInfo.name}</i></b>`
showSlides()

function loadReview() {
  let numOfRating = 0;
  let star = 0;
  for(let j =0; j < locationInfo.rating.length; j++){
    numOfRating += locationInfo.rating[j]
  }
  numOfRating = numOfRating/locationInfo.rating.length;
  while(numOfRating != 0){
    if(numOfRating - 1 > 0){
      numOfRating--;
      star++;
    }else{
      if(numOfRating >= 0.5){
        numOfRating--;
        star++;
      }else{
        numOfRating = 0;
      }
    }
  }
  let imgStarString = ""
  for(let j = 0; j < star; j++){
    imgStarString += '<img src = "https://blake5kh.files.wordpress.com/2012/09/star.jpg" width="40px">'
  }
  for(let j = star; j < 5; j++){
    imgStarString += '<img src = "https://www.freeiconspng.com/uploads/gold-star-empty-image-icon-23.png" width="40px">'
  }
  let rev = document.getElementById("rev")
  imgStarString = `<div><b>Rating</b> ${imgStarString}</div>`
  let reviewSection = ""
  for(let i = locationInfo.review.length-1; i >= 0 ; i--){
    reviewSection += `<div class="message"><i>${locationInfo.review[i].name}~</i><br><p>${locationInfo.review[i].content}</p></div>`
  }
  rev.innerHTML = imgStarString + reviewSection
}
let numRating = 5;
function writeReview(){
  // const ratingContainer = document.createElement("div");
  // ratingContainer.classList.add("rating");
  let starsString = "<div class = 'rating'><h2>How was your experience</h2>";
  for (let i = 0; i < 5; i++) {
    starsString += "<span class = 'star'>&#9733;</span>"
  }
  starsString += `</div><div class="review-box"><textarea id="userInput" placeholder="Write your review here"></textarea><div id='bravo'><br></div><button id="btn1">Submit</button></div>`
  
  document.getElementById('wrev').innerHTML = starsString;
  const rating = document.querySelector('.rating');
  const stars = Array.from(rating.querySelectorAll('.star'));
  
  rating.addEventListener('click', (e) => {
    
  const index = stars.indexOf(e.target);
  stars.forEach((star, i) => {
    if (i <= index) {
      star.style.color = '#f2b01e';
    } else {
      star.style.color = '#bbb';
    }
  });
  numRating = index+1;
  truth = true
});


btn1.addEventListener("click",function () {
  let input = document.getElementById('userInput').value;
  if(truth === true){
    if(input == ""){
      for (let i = 0; i < allLocationInfo.length; i++) {
        if(allLocationInfo[i].idInfo == target){
            allLocationInfo[i].rating.push(numRating)
            locationInfo = allLocationInfo[i]
            break;
        }
    }
    }else{
      for (let i = 0; i < allLocationInfo.length; i++) {
        if(allLocationInfo[i].idInfo == target){
            allLocationInfo[i].rating.push(numRating)
            allLocationInfo[i].review.push({name:"tester",content:input})
            locationInfo = allLocationInfo[i]
            break;
        }
    }}
    input = ""
    numRating = 5;
    let bravo = document.getElementById('bravo')
    bravo.innerHTML = "Bravo! Thanks for review"
    bravo.style.color = "green"
    truth = false;
  }else{
    let bravo = document.getElementById('bravo')
    bravo.innerHTML = "Choose a rating!"
    bravo.style.color = "red"
  }
  
})

}

document.getElementById('review').addEventListener('click',function(){
  document.getElementById('booking').innerHTML = null;
  document.getElementById('wrev').innerHTML = null;
  loadReview();
})
document.getElementById('add').addEventListener('click',function(){
  document.getElementById('booking').innerHTML = null;
  document.getElementById('rev').innerHTML = null;
  writeReview();
})
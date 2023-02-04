let target = JSON.parse(localStorage.getItem("target"))
let allLocationInfo = JSON.parse(localStorage.getItem("locationData"))
let locationInfo;
for (let i = 0; i < allLocationInfo.length; i++) {
    if(allLocationInfo[i].idInfo == target){
        locationInfo = allLocationInfo[i];
        break;
    }
    
}

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
  image.style.width = "100%";
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

showSlides()
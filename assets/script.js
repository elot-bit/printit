const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Slides

let currentSlide = 0;

const slidesBanner = document.querySelectorAll(".banner-img");
// NB perso : querySelectorAll récupère tous les éléments contrairement à getElementByID

const dotsContainer = document.querySelector(".dots");

const bannerText = document.querySelector("#banner-text");

// Les points se mettent sur chaque slide :

slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if(index === 0) {
    dot.classList.add("active");
  }
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slidesBanner.forEach(slide => {
    slide.classList.remove("active");
  });
  dots.forEach(dot => {
    dot.classList.remove("active");
  });
  slidesBanner[index].classList.add("active");
  dots[index].classList.add("active");
  bannerText.innerHTML = slides[index].tagLine;
}

// Sélection des flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Event listener flèche gauche
arrowLeft.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
});

// Event listener flèche droite
arrowRight.addEventListener("click", () => {
	currentSlide++;
	if (currentSlide === slides.length) {
    currentSlide = 0;
    }
    showSlide(currentSlide);
});

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

const bannerImage = document.querySelector(".banner-img");

const dotsContainer = document.querySelector(".dots");

const bannerText = document.querySelector("#banner-text");

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
    bannerImage.src = './assets/images/slideshow/' + slides[index].image;
    bannerText.innerHTML = slides[index].tagLine;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}


const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);


showSlide(currentSlide);

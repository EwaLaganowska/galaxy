const carousel = document.querySelector('.carousel');
const stage = document.querySelector('.carousel-stage');
const prev = document.querySelector('.carousel-nav-item');
const next = document.querySelector('.carousel-next');
let slide = document.querySelectorAll('.single-slide');

var slideWidth = slide[0].clientWidth;
console.log(slideWidth);

var currentIndex = 0;
var slidesNumber = slide.length - 1;

function goToSlide(index) {
  carousel.style.left = index * (-slideWidth);
  currentIndex = index;
}

function slideToNext() {
  goToSlide(currentIndex + 1);
}
function slideToPrev() {
  goToSlide(currentIndex - 1);
}

function bindEvents() {
  prev.addEventListener('click', slideToPrev);
  next.addEventListener('click', slideToNext);
}
bindEvents();

function goToSlide(index) {
  if (index < 0) {
    index = slidesNumber;
 } else if (index > slidesNumber) {
    index = 0;
 }
carousel.style.left = index * (-slideWidth);
  currentIndex = index;
}

function autorotate() {
  setInterval(slideToNext, 1000);
}
autorotate();

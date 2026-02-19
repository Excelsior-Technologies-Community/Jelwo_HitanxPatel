//==================================================== Popular collection

const slider = document.querySelector('.product-slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const items = document.querySelectorAll('.product-card');
let currentIndex = 0;

function getItemWidth() {
return items[0].offsetWidth + 15;
}

function updateArrows() {

if (currentIndex === 0) {
    prevBtn.classList.add('disabled');
} else {
    prevBtn.classList.remove('disabled');
}

if (currentIndex >= items.length - 2) {
    nextBtn.classList.add('disabled');
} else {
    nextBtn.classList.remove('disabled');
}
}

nextBtn.addEventListener('click', () => {
if (currentIndex < items.length - 2) {
    currentIndex++;
    slider.style.transform =
    `translateX(-${currentIndex * getItemWidth()}px)`;
    updateArrows();
}
});

prevBtn.addEventListener('click', () => {
if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform =
    `translateX(-${currentIndex * getItemWidth()}px)`;
    updateArrows();
}
});

updateArrows();

//==================================================== hero section silder
document.addEventListener("DOMContentLoaded", function () {

  const carouselElement = document.querySelector('#heroCarousel');

  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: false,
    wrap: false
  });

  const prevBtn = document.querySelector('.carousel-control-prev');
  const nextBtn = document.querySelector('.carousel-control-next');

  function updateArrows() {

    const items = carouselElement.querySelectorAll('.carousel-item');
    const activeItem = carouselElement.querySelector('.carousel-item.active');

    const index = Array.from(items).indexOf(activeItem);

    if (index === 0) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }

    if (index === items.length - 1) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }

  carouselElement.addEventListener('slid.bs.carousel', updateArrows);

  updateArrows();

});

//==================================================== Popular category
document.addEventListener("DOMContentLoaded", function () {

  const slider = document.querySelector('.category-slider');
  const items = document.querySelectorAll('.category-card-wrapper');

  let index = 0;
  let visibleCards = getVisibleCards();
  const total = items.length;

  function getVisibleCards() {
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  }

  function getItemWidth() {
    return items[0].offsetWidth;
  }

  function moveSlider() {
    const itemWidth = getItemWidth();
    slider.style.transform =
      `translateX(-${index * itemWidth}px)`;
  }

  function nextSlide() {
    visibleCards = getVisibleCards();

    if (index >= total - visibleCards) {
      index = 0;
    } else {
      index++;
    }

    moveSlider();
  }

  setInterval(nextSlide, 7000);

  window.addEventListener('resize', () => {
    visibleCards = getVisibleCards();
    index = 0;
    moveSlider();
  });

});

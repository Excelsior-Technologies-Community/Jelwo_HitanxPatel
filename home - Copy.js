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

//==================================================== New jewelrys Countdown Timer

document.addEventListener("DOMContentLoaded", function () {

  const countdowns = document.querySelectorAll('.new-countdown');

  countdowns.forEach(countdown => {

    let days = parseInt(countdown.dataset.days);
    let hours = parseInt(countdown.dataset.hours);
    let minutes = parseInt(countdown.dataset.minutes);
    let seconds = parseInt(countdown.dataset.seconds);

    const daysEl = countdown.querySelector('.days');
    const hoursEl = countdown.querySelector('.hours');
    const minutesEl = countdown.querySelector('.minutes');
    const secondsEl = countdown.querySelector('.seconds');

    function updateTimer() {

      if (seconds > 0) {
        seconds--;
      } else {
        seconds = 59;

        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;

          if (hours > 0) {
            hours--;
          } else {
            hours = 23;

            if (days > 0) {
              days--;
            } else {
              clearInterval(timer);
              return;
            }
          }
        }
      }

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');

    }

    const timer = setInterval(updateTimer, 1000);

  });

});

//==================================================== New jewelrys qty btn
document.querySelectorAll(".qty-box").forEach(box => {

    const minusBtn = box.querySelector(".qty-minus");
    const plusBtn = box.querySelector(".qty-plus");
    const numberEl = box.querySelector(".qty-number");

    let quantity = 1;

    plusBtn.addEventListener("click", () => {
        quantity++;
        numberEl.textContent = quantity;
    });

    minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            numberEl.textContent = quantity;
        }
    });

});


//==================================================== New jewelrys in eye icon - Modal Color Select FINAL FIX

document.addEventListener("click", function (e) {

  if (e.target.classList.contains("color")) {

    const clickedColor = e.target;
    const group = clickedColor.closest(".color-group");
    const colors = group.querySelectorAll(".color");

    colors.forEach(c => c.classList.remove("active"));

    clickedColor.classList.add("active");

    const selectedText = group.closest(".option-group")
                              .querySelector(".selected-color");

    const colorName = clickedColor.classList[1];

    selectedText.textContent =
      colorName.charAt(0).toUpperCase() + colorName.slice(1);
  }

});

// ================= New jewelrys in eye icon - Quantity Box JS =================

document.querySelectorAll(".qty-box2").forEach(box => {

  const minusBtn = box.querySelector("button:first-child");
  const plusBtn = box.querySelector("button:last-child");
  const numberEl = box.querySelector("span");

  let quantity = 1;

  plusBtn.addEventListener("click", function () {
    quantity++;
    numberEl.textContent = quantity;
  });

  minusBtn.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      numberEl.textContent = quantity;
    }
  });

});

// ================= New jewelrys in eye icon - Modal Image Slider 
document.addEventListener("DOMContentLoaded", function () {

  const mainImg = document.querySelector(".main-img");
  const thumbs = document.querySelectorAll(".thumb-wrapper img");
  const prevBtn = document.querySelector(".img-prev");
  const nextBtn = document.querySelector(".img-next");

  let currentIndex = 0;

  const images = Array.from(thumbs).map(img => img.src);

  function updateImage() {
    mainImg.src = images[currentIndex];

    thumbs.forEach(thumb => {
      thumb.classList.remove("active-thumb");
    });

    thumbs[currentIndex].classList.add("active-thumb");
  }

  nextBtn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    updateImage();
  });

  prevBtn.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    updateImage();
  });

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", function () {
      currentIndex = index;
      updateImage();
    });
  });

});
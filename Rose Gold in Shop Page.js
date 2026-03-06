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

//==================================================== price-filter range line
const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");

const priceFrom = document.getElementById("priceFrom");
const priceTo = document.getElementById("priceTo");

rangeMin.addEventListener("input", () => {

    if (parseInt(rangeMin.value) >= parseInt(rangeMax.value)) {
        rangeMin.value = rangeMax.value - 1;
    }

    priceFrom.value = rangeMin.value;

});

rangeMax.addEventListener("input", () => {

    if (parseInt(rangeMax.value) <= parseInt(rangeMin.value)) {
        rangeMax.value = parseInt(rangeMin.value) + 1;
    }

    priceTo.value = rangeMax.value;

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

// ================= product
// const gridBtn = document.getElementById("gridBtn");
// const listBtn = document.getElementById("listBtn");

// const gridView = document.getElementById("gridView");
// const listView = document.getElementById("listView");

// gridBtn.addEventListener("click", () => {

//     gridView.style.display = "block";
//     listView.style.display = "none";

//     gridBtn.classList.add("active");
//     listBtn.classList.remove("active");

// });

// listBtn.addEventListener("click", () => {

//     gridView.style.display = "none";
//     listView.style.display = "block";

//     listBtn.classList.add("active");
//     gridBtn.classList.remove("active");

// });

const gridBtns = document.querySelectorAll(".gridBtn");
const listBtns = document.querySelectorAll(".listBtn");

const gridView = document.getElementById("gridView");
const listView = document.getElementById("listView");

gridBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    gridView.style.display = "block";
    listView.style.display = "none";

    gridBtns.forEach(b => b.classList.add("active"));
    listBtns.forEach(b => b.classList.remove("active"));

  });
});

listBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    gridView.style.display = "none";
    listView.style.display = "block";

    listBtns.forEach(b => b.classList.add("active"));
    gridBtns.forEach(b => b.classList.remove("active"));

  });
});
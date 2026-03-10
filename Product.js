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

// ================= Product Image Gallery =================

const mainImage = document.getElementById("mainProductImage");
const thumbnails = document.querySelectorAll(".thumb-img");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

const imageList = [];

let currentImage = 0;

thumbnails.forEach((thumb, index) => {

    imageList.push(thumb.src);

    thumb.addEventListener("click", function () {

        currentImage = index;

        updateImage();

    });

});

function updateImage(){

    mainImage.src = imageList[currentImage];

    thumbnails.forEach((t)=>{
        t.parentElement.classList.remove("active");
    });

    thumbnails[currentImage].parentElement.classList.add("active");

}

rightArrow.addEventListener("click", () => {

    currentImage++;

    if(currentImage >= imageList.length){
        currentImage = 0;
    }

    updateImage();

});

leftArrow.addEventListener("click", () => {

    currentImage--;

    if(currentImage < 0){
        currentImage = imageList.length - 1;
    }

    updateImage();

});

// ================= Product Sale Countdown Timer =================

const timer = document.querySelector(".timer");

const saleEnd = new Date().getTime() + (1634  * 24 * 60 * 60 * 1000); 


function updateTimer(){

    const now = new Date().getTime();

    const distance = saleEnd - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML =
        days + " : " +
        hours + " : " +
        minutes + " : " +
        seconds;

}

setInterval(updateTimer,1000);

updateTimer();

// ================= Product Color Change =================

const colorButtons = document.querySelectorAll(".color-btn");
const selectedColor = document.getElementById("selectedColor");

colorButtons.forEach((btn)=>{

    btn.addEventListener("click", function(){

        colorButtons.forEach((b)=>{
            b.classList.remove("active");
        });

        this.classList.add("active");

        selectedColor.textContent = this.textContent;

    });

});

// ================= Product Quantity Buttons =================

const qtyInput = document.getElementById("qtyInput");
const plusBtn = document.querySelector(".qty-plus");
const minusBtn = document.querySelector(".qty-minus");

plusBtn.addEventListener("click", ()=>{
    qtyInput.value = parseInt(qtyInput.value) + 1;
});

minusBtn.addEventListener("click", ()=>{
    if(qtyInput.value > 1){
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
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

// ================= NEW JEWELRYS SLIDER =================
const sliderWrapper = document.querySelector(".new-slider-wrapper");
const sliderTrack = document.querySelector(".new-slider");

let isDragging = false;
let startX;
let scrollLeft;

sliderWrapper.addEventListener("mousedown", (e) => {
  isDragging = true;
  sliderTrack.style.transition = "none";
  startX = e.pageX;
  scrollLeft = sliderTrack.offsetLeft;
});

sliderWrapper.addEventListener("mouseleave", () => {
  isDragging = false;
  sliderTrack.style.transition = "transform 0.4s ease";
});

sliderWrapper.addEventListener("mouseup", () => {
  isDragging = false;
  sliderTrack.style.transition = "transform 0.4s ease";
});

sliderWrapper.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const x = e.pageX;
  const walk = (x - startX);

  sliderTrack.style.transform = `translateX(${scrollLeft + walk}px)`;
});

// ================= section-product Sticky Cart Quantity =================

const stickyQtyBox = document.querySelector(".sticky-cart-qty");

if(stickyQtyBox){

	const minusBtn = stickyQtyBox.querySelector("button:first-child");
	const plusBtn = stickyQtyBox.querySelector("button:last-child");
	const numberEl = stickyQtyBox.querySelector("span");

	let quantity = 1;

	plusBtn.addEventListener("click", function(){

		quantity++;
		numberEl.textContent = quantity;

	});

	minusBtn.addEventListener("click", function(){

		if(quantity > 1){
			quantity--;
			numberEl.textContent = quantity;
		}

	});

}

// ================= Sticky Cart Show After Fashion Section =================

const stickyCart = document.querySelector(".section-product-sticky-cart");
const fashionSection = document.querySelector(".section-fashion-arrivals");

window.addEventListener("scroll", function(){

	if(!stickyCart || !fashionSection) return;

	const fashionTop = fashionSection.offsetTop;
	const scrollPosition = window.scrollY + window.innerHeight;

	if(scrollPosition >= fashionTop){
		stickyCart.style.display = "block";
	}else{
		stickyCart.style.display = "none";
	}

});
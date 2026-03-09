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
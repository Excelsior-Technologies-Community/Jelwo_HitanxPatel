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
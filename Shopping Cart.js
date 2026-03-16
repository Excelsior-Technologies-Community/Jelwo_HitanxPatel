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

//==================================================== Shopping cart icon
const suggestSlider = document.querySelector(".suggest-slider");
const suggestItems = document.querySelectorAll(".suggest-item");
const suggestNext = document.getElementById("suggestNext");
const suggestPrev = document.getElementById("suggestPrev");

let suggestIndex = 0;

suggestNext.addEventListener("click", () => {

	if(suggestIndex < suggestItems.length - 1){
		suggestIndex++;
		suggestSlider.style.transform =
		`translateX(-${suggestIndex * 100}%)`;
	}

});

suggestPrev.addEventListener("click", () => {

	if(suggestIndex > 0){
		suggestIndex--;
		suggestSlider.style.transform =
		`translateX(-${suggestIndex * 100}%)`;
	}

});

// auto silder in shoping cart
setInterval(() => {

	if(suggestIndex < suggestItems.length - 1){
		suggestIndex++;
	}else{
		suggestIndex = 0;
	}

	suggestSlider.style.transform =
	`translateX(-${suggestIndex * 100}%)`;

}, 5000);
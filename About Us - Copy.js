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

// ================= section-about-clients-main Clients Image Slider =================

const clientImages = [
	"https://jelwo.myshopify.com/cdn/shop/files/jewelry-testi-3.jpg?v=1741598801&width=90",
	"https://jelwo.myshopify.com/cdn/shop/files/jewelry-testi-1.jpg?v=1741598801&width=90",
	"https://jelwo.myshopify.com/cdn/shop/files/jewelry-testi-4.jpg?v=1741598801&width=90",
	"https://jelwo.myshopify.com/cdn/shop/files/jewelry-testi-2.jpg?v=1741598801&width=90"
];

const clientImg = document.getElementById("clientImg");
const next = document.querySelector(".clients-next");
const prev = document.querySelector(".clients-prev");

let index = 0;

next.addEventListener("click", () => {
	index++;

	if(index >= clientImages.length){
		index = 0;
	}

	clientImg.src = clientImages[index];
});

prev.addEventListener("click", () => {
	index--;

	if(index < 0){
		index = clientImages.length - 1;
	}

	clientImg.src = clientImages[index];
});
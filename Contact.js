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

//==================================================== section-contact-locations-main silder
const contactSlider = document.querySelector(".contact-slider");
const next = document.querySelector(".contact-next");
const prev = document.querySelector(".contact-prev");

const contactItems = document.querySelectorAll(".contact-location-item");

let contactIndex = 0;
const visibleCards = 4;

function contactWidth(){
	return contactItems[0].getBoundingClientRect().width;
}

next.addEventListener("click", () => {

	if(contactIndex < contactItems.length - visibleCards){

		contactIndex++;

		contactSlider.style.transform =
		`translateX(-${contactIndex * contactWidth()}px)`;

	}

});

prev.addEventListener("click", () => {

	if(contactIndex > 0){

		contactIndex--;

		contactSlider.style.transform =
		`translateX(-${contactIndex * contactWidth()}px)`;

	}

});
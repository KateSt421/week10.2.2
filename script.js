let programmingLanguage = 'JavaScript';

function learnLanguage(programmingLanguage) {
	console.log(`Я учу ${programmingLanguage}!`);
}

learnLanguage(programmingLanguage);


const images = [
  (src = "/assets/images/cat1.avif"),
  (src = "/assets/images/cat2.avif"),
  (src = "/assets/images/cat3.avif"),
  (src = "/assets/images/cat4.avif"),
  (src = "/assets/images/cat5.avif"),
  (src = "/assets/images/cat6.avif"),
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function nextImage() {
  galleryImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  nextImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  nextImage();
});
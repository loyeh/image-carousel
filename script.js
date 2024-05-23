const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const image = document.querySelector(".image");
let index = 0;

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

function nextImage() {
  // clearInterval(interval);
  index++;
  if (index > 4) {
    index = 0;
  }
  image.style.transform = `translateX(-${100 * index}%)`;
  interval;
}

function prevImage() {
  index--;
  if (index < 0) {
    index = 4;
  }
  image.style.transform = `translateX(-${100 * index}%)`;
}

const interval = setInterval(() => {
  index++;
  if (index > 4) {
    index = 0;
  }
  image.style.transform = `translateX(-${100 * index}%)`;
}, 1000);

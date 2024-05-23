const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const image = document.querySelector(".image");
let index = 0;

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

let interval = setInterval(() => {
  index++;
  if (index > 4) {
    index = 0;
  }
  image.style.transform = `translateX(-${100 * index}%)`;
}, 1000);

function nextImage() {
  clearInterval(interval);
  index++;
  if (index > 4) {
    index = 0;
  }
  image.style.transform = `translateX(-${100 * index}%)`;
  interval = setInterval(() => {
    index++;
    if (index > 4) {
      index = 0;
    }
    image.style.transform = `translateX(-${100 * index}%)`;
  }, 1000);
}

function prevImage() {
  clearInterval(interval);
  index--;
  if (index < 0) {
    index = 4;
  }
  image.style.transform = `translateX(-${100 * index}%)`;
  interval = setInterval(() => {
    index--;
    if (index < 0) {
      index = 4;
    }
    image.style.transform = `translateX(-${100 * index}%)`;
  }, 1000);
}

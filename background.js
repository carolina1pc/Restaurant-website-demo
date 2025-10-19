const images = ["images/Cut-and-craft-leeds-1-1024x817.webp", "images/index.webp", "images/lounge.jpg"];
let index = 0;
const container = document.getElementById("background-container");

function switchBackground() {
  const bg = document.createElement("div");
  bg.classList.add("bg-slide");
  bg.style.backgroundImage = `url(${images[index]})`;
  bg.style.left = "100vw";
  container.appendChild(bg);

  void bg.offsetWidth;

  requestAnimationFrame(() => {
    bg.style.left = "0"; 
  });

  setTimeout(() => {
    const slides = container.querySelectorAll(".bg-slide");
    if (slides.length > 1) slides[0].remove();
  }, 1000);

  index = (index + 1) % images.length;
}

setInterval(switchBackground, 5000);
switchBackground();
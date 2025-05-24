document.getElementById("year").textContent = new Date().getFullYear();

const toggleBtn = document.getElementById("toggleDark");
const body = document.getElementById("body");
const statusText = document.getElementById("statusText");
const profileImg = document.getElementById("profileImg");
const iconElement = document.getElementById("darkIconIcon");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    iconElement.className = "fa-regular fa-sun";
    statusText.textContent = "AWAKE";
    profileImg.src = "img/i.jpg";
  } else {
    iconElement.className = "fa-solid fa-star-and-crescent";
    statusText.textContent = "zzzZZ";
    profileImg.src = "img/g.jpg";
  }
});

gsap.from("#profileImg", {
  y: -1000,
  duration: 2,
  delay: 1,
});

ScrollReveal().reveal(".reveal", {
  distance: "30px",
  duration: 1000,
  easing: "ease-out",
  origin: "bottom",
  interval: 200,
  reset: false,
});

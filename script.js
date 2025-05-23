document.getElementById("year").textContent = new Date().getFullYear();

const toggleBtn = document.getElementById("toggleDark");
const body = document.getElementById("body");
const statusText = document.getElementById("statusText");
const profileImg = document.getElementById("profileImg");
const iconElement = document.getElementById("darkIconIcon");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    iconElement.className = "fa-regular fa-sun"; // Matahari (light mode)
    statusText.textContent = "AWAKE";

    profileImg.classList.add("opacity-0");
    setTimeout(() => {
      profileImg.src = "img/i.jpg";
      profileImg.classList.remove("opacity-0");
    });
  } else {
    iconElement.className = "fa-solid fa-star-and-crescent"; // Bulan (dark mode)
    statusText.textContent = "zzzZZ";

    profileImg.classList.add("opacity-0");
    setTimeout(() => {
      profileImg.src = "img/g.jpg";
      profileImg.classList.remove("opacity-0");
    });
  }
});

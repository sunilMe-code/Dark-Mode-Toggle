const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");

toggleBtn.addEventListener("click", () => {
   toggleBtn.classList.toggle("active");

   if (icon.classList.contains("ri-sun-fill")) {
      icon.classList.remove("ri-sun-fill");
      icon.classList.add("ri-moon-fill");
      document.querySelector(".dark").style.display = "block";
      document.querySelector(".scene").style.display = "none";
      document.querySelector(".container").style.background = "#010510";
   } else {
      icon.classList.remove("ri-moon-fill");
      icon.classList.add("ri-sun-fill");
      document.querySelector(".dark").style.display = "none";
      document.querySelector(".scene").style.display = "block";
      document.querySelector(".container").style.background = "linear-gradient(to top, #87ceeb, #e0f7ff)";
   }
});

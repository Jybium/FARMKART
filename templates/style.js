// This is the modal for the signup modal box
// document.querySelector(".mini").addEventListener("click", function () {
//   document.querySelector("#myModal").style.display = "block";
//   document.querySelector(".over").style.display = "block";
// });
// document.querySelector(".close").addEventListener("click", function () {
//   document.querySelector("#myModal").style.display = "none";
//   document.querySelector(".over").style.display = "none";
// });

// document.addEventListener("keydown", function (e) {
//   document.querySelector("#myModal").style.display = "none";
//   document.querySelector(".over").style.display = "none";
// });

// This is the script for the landing page
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

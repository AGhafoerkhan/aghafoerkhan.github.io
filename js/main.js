const overlayButton = document.querySelector(".overlay-button");
const overlay = document.querySelector(".overlay");
const overlayContent = document.querySelector(".overlay-content");
const body = document.querySelector("body");

let isOpen = false;

overlayButton.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    overlay.style.display = "block";
    overlayContent.style.display = "flex"; // Show the subjects
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    body.style.overflow = "hidden";
  } else {
    overlayContent.style.display = "none"; // Hide the subjects
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    body.style.overflow = "auto";
  }
});


// document.querySelector('.scroll-link').addEventListener('click', function(event) {
//   event.preventDefault();
//   scrollToHeight(500);
// });

// function scrollToHeight(height) {
//   overlayContent.style.display = "none";
//   overlay.classList.remove("fade-in");
//   window.scrollTo({
//     top: height,
//     behavior: 'smooth'
//   });
// }
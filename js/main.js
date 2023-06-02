document.addEventListener("DOMContentLoaded", function () {
  var overlayButton = document.querySelector(".overlay-button");
  var overlay = document.querySelector(".overlay");
  var overlayContent = document.querySelector(".overlay-content");
  var isOpen = false;

  overlayButton.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      overlay.style.display = "block";
      overlayContent.style.display = "flex"; // Show the subjects
      overlay.classList.remove("fade-out");
      overlay.classList.add("fade-in");
    } else {
      overlayContent.style.display = "none"; // Hide the subjects
      overlay.classList.add("fade-out");
      overlay.classList.remove("fade-in");
    }
  });
});

// const overlayButton = document.querySelector(".overlay-button");
// const overlay = document.querySelector(".overlay");
// const overlayContent = document.querySelector(".overlay-content");
// const body = document.querySelector("body");
// const fadeAnimtion = document.querySelectorAll(".animated-text");


// let isOpen = false;

// overlayButton.addEventListener("click", function () {
//  fadeInOut();
// });

// fadeAnimtion.forEach(button => {
//   button.addEventListener("click", fadeInOut);
// });


// function fadeInOut() {
//   isOpen = !isOpen;
//   if (isOpen) {
//     overlay.style.display = "block";
//     overlayContent.style.display = "flex"; // Show the subjects
//     overlay.classList.remove("fade-out");
//     overlay.classList.add("fade-in");
//     body.style.overflow = "hidden";
//   } else {
//     overlayContent.style.display = "none"; // Hide the subjects
//     overlay.classList.add("fade-out");
//     overlay.classList.remove("fade-in");
//     body.style.overflow = "auto";
//   }
// };

// function updateLastUpdatedMessage() {
//   let now = new Date();
//   now.setTime(now.getTime() - (8 * 60 * 60 * 1000)); // Subtracting 8 hours in milliseconds

//   let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };
//   let message = "Last updated: " + now.toLocaleString('en-US', options);

//   let elements = document.querySelectorAll(".last-updated");
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].textContent = message;
//   }
// }

// updateLastUpdatedMessage();


// overlay.addEventListener('click', function() {
//   overlayContent.style.display = "none"; 
//   overlay.classList.add("fade-out");
//   overlay.classList.remove("fade-in");
//   body.style.overflow = "auto";
// });




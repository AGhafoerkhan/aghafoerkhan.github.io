// document.addEventListener("DOMContentLoaded", function () {
//   const textElement = document.getElementById("typing-text");
//   const cursorElement = document.getElementById("cursor");
//   const text = "ghafoerkhan";
//   let currentChar = 0;
//   let isDeleting = false;

//   function typeWriter() {
//     if (isDeleting) {
//       textElement.textContent = text.substring(0, currentChar);
//       currentChar--;
//       if (currentChar <= 0) {
//         isDeleting = false;
//         currentChar = 1; // Reset currentChar for retyping
//       }
//     } else {
//       textElement.textContent += text[currentChar];
//       currentChar++;
//       if (currentChar === text.length) {
//         isDeleting = true;
//       }
//     }

//     // Generate random delay based on a minimum and maximum range
//     const minDelay = 20; // Adjust for minimum speed
//     const maxDelay = 300; // Adjust for maximum speed
//     const randomDelay =
//       Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

//     // Schedule next loop iteration with random delay
//     if (currentChar < text.length || isDeleting) {
//       setTimeout(typeWriter, randomDelay);
//     }
//   }

//   typeWriter();
// });
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const cursorElement = document.getElementById("cursor");
  const text = "ghafoerkhan";
  let currentChar = 0;
  let isDeleting = false;

  // Adjustable typing speed range (adjust minDelay and maxDelay)
  const minDelay = 20; // Adjust for minimum speed (milliseconds)
  const maxDelay = 100; // Adjust for maximum speed (milliseconds)

  function typeWriter() {
    if (isDeleting) {
      textElement.textContent = text.substring(0, currentChar);
      currentChar--;
      if (currentChar <= 0) {
        isDeleting = false;
        currentChar = 0;
      }
    } else {
      textElement.textContent += text[currentChar];
      currentChar++;
      if (currentChar === text.length) {
        isDeleting = true;
      }
    }

    // Generate random delay based on min and max range
    const randomDelay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    // Schedule next loop iteration with random delay
    if (currentChar < text.length || isDeleting) {
      setTimeout(typeWriter, randomDelay);
    }
  }

  typeWriter();
});

const overlayButton = document.querySelector(".overlay-button");
const overlay = document.querySelector(".overlay");
const overlayContent = document.querySelector(".overlay-content");
const body = document.querySelector("body");
const fadeAnimtion = document.querySelectorAll(".animated-text");


let isOpen = false;

overlayButton.addEventListener("click", function () {
 fadeInOut();
});

fadeAnimtion.forEach(button => {
  button.addEventListener("click", fadeInOut);
});


function fadeInOut() {
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
};

function updateLastUpdatedMessage() {
  let now = new Date();
  now.setTime(now.getTime() - (8 * 60 * 60 * 1000)); // Subtracting 8 hours in milliseconds

  let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };
  let message = "Last updated: " + now.toLocaleString('en-US', options);

  let elements = document.querySelectorAll(".last-updated");
  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = message;
  }
}

updateLastUpdatedMessage();

var texts = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ': )'];
var number_of_particle = 12;

for (var i = 0; i < texts.length; i++) {
  var backgroundClass = "background" + i;
  // Create background element with the specified class
  var backgroundElement = document.createElement('div');
  backgroundElement.classList.add(backgroundClass);
  document.body.appendChild(backgroundElement);

  // Create criterion element
  var criterionElement = document.createElement('div');
  criterionElement.classList.add('criterion');

  // Create text elements
  for (var j = 0; j < texts.length; j++) {
    var textClass = 'text' + j;
    var textElement = document.createElement('div');
    textElement.classList.add(textClass);
    textElement.innerText = texts[j];
    criterionElement.appendChild(textElement);
  }

  // Create frame elements
  for (var k = 0; k < texts.length; k++) {
    var frameClass = 'frame' + k;
    var frameElement = document.createElement('div');
    frameElement.classList.add(frameClass);
    criterionElement.appendChild(frameElement);
  }

  // Create particle elements
  for (var l = 0; l < texts.length; l++) {
    for (var m = 0; m < number_of_particle; m++) {
      var particleClass = "particle" + l + m;
      var particleElement = document.createElement('div');
      particleElement.classList.add(particleClass);
      criterionElement.appendChild(particleElement);
    }
  }

  document.body.appendChild(criterionElement);
}





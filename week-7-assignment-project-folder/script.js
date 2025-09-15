/*  Functions, Parameters & Scope */

// Global variable
let globalMultiplier = 2;


function calculateArea(width, height) {
  let localArea = width * height; // Local scope
  return localArea * globalMultiplier; // Uses global variable too
}

// Function that interacts with DOM
function showArea() {
  let width = 20, height = 50;
  let result = calculateArea(width, height);
  document.getElementById("function-output").textContent =
    `The area of ${width}x${height} (with multiplier ${globalMultiplier}) is: ${result}`;
}

/*  Combining CSS + JavaScript  */
function triggerAnimation() {
  let box = document.getElementById("animatedBox");

  
  box.classList.remove("animate");
  
  
  setTimeout(() => {
    box.classList.add("animate");
  }, 50);
}

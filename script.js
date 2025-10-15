document.addEventListener("DOMContentLoaded", function() {
  const StarContainer = document.getElementById("StarContainer");
  const numberOfBlackBoxes = 120; 
  const documentHeight = document.documentElement.scrollHeight;
  // const navBarHeight = document.querySelector(".navbar").offsetHeight; // Get the height of the nav bar

  for (let i = 0; i < numberOfBlackBoxes; i++) {
    const blackBox = document.createElement("div");
    blackBox.classList.add("star");
    blackBox.style.left = Math.random() * 100 + "%"; // Spread horizontally across the page
    blackBox.style.top = Math.random() * (documentHeight) + "px"; // Randomize vertical placement within the document height, accounting for the nav bar height
    StarContainer.appendChild(blackBox);
  }

  StarContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("star")) {
      event.target.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const StarContainer2 = document.getElementById("StarContainer2");
  const numberOfBlackBoxes = 140; 
  const documentHeight = document.documentElement.scrollHeight;
  // const navBarHeight = document.querySelector(".navbar").offsetHeight; // Get the height of the nav bar

  for (let i = 0; i < numberOfBlackBoxes; i++) {
    const blackBox = document.createElement("div");
    blackBox.classList.add("star2");
    blackBox.style.left = Math.random() * 100 + "%"; // Spread horizontally across the page
    blackBox.style.top = Math.random() * (documentHeight) + "px"; // Randomize vertical placement within the document height, accounting for the nav bar height
    StarContainer2.appendChild(blackBox);
  }

  StarContainer2.addEventListener("click", function(event) {
    if (event.target.classList.contains("star2")) {
      event.target.style.display = "none";
    }
  });
});




function randomPosition() {
  var elements = document.getElementsByClassName("page10-text");
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  
  for (var i = 0; i < elements.length; i++) {
    var left = Math.floor(Math.random() * (viewportWidth - elements[i].offsetWidth));
    var top = Math.floor(Math.random() * (viewportHeight - elements[i].offsetHeight));
    elements[i].style.left = left + "px";
    elements[i].style.top = top + "px";
  }
}

randomPosition();


function toggleVisibility(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

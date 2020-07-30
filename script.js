var css = document.querySelector("h3");
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var body = document.getElementById("gra");

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background;
}

//input
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Get all the elements
const btn = document.querySelector("button");
const color = document.querySelectorAll(".color");
const hex = document.querySelectorAll(".hex");

//Add a click event on the button
btn.addEventListener("click", generateColors);

function generateColors() {
  for (let i = 0; i < color.length; i++) {
    //Gerenate random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    //Add the color as the background
    color[i].style.background = "#" + randomColor;

    //Add animation
    color[i].classList.add("fade-in");
    setTimeout(() => color[i].classList.remove("fade-in"), 400);

    //Add the hex code above the color
    hex[i].innerHTML = "#" + randomColor;
  }
}

function copyToClipboard1() {
  const hex1 = document.getElementById("hex1").innerText;
  navigator.clipboard.writeText(hex1).then(() => {
    alert("Copiado para área de transferência");
  });
}
function copyToClipboard2() {
  const hex2 = document.getElementById("hex2").innerText;
  navigator.clipboard.writeText(hex2).then(() => {
    alert("Copiado para área de transferência");
  });
}
function copyToClipboard3() {
  const hex3 = document.getElementById("hex3").innerText;
  navigator.clipboard.writeText(hex3).then(() => {
    alert("Copiado para área de transferência");
  });
}
function copyToClipboard4() {
  const hex4 = document.getElementById("hex4").innerText;
  navigator.clipboard.writeText(hex4).then(() => {
    alert("Copiado para área de transferência");
  });
}

//Generate color on page load
generateColors();

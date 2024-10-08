const colors = ["Red", "Blue", "Green", "Yellow"];

let body = document.getElementById("body");
let simple = document.getElementById("simple");
let colorName = document.getElementById("colorName");

simple.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];
  body.style.backgroundColor = selectedColor;
  colorName.textContent = `Background Color: ${selectedColor}`;
});

const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateArea(b, h) {
  const areaOfTriangle = (b * h) / 2;
  return areaOfTriangle;
}

function calculateAreaOfTriangle() {
  const areaOfTriangle = calculateArea(
    Number(baseInput.value),
    Number(heightInput.value)
  );

  output.innerText = "Area of Traingle is " + areaOfTriangle;
}

areaBtn.addEventListener("click", calculateAreaOfTriangle);

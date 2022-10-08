const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateArea(b, h) {
  const areaOfTriangle = (b * h) / 2;
  return areaOfTriangle;
}

function calculateAreaOfTriangle() {
  if (baseInput.value == "" || heightInput.value == "") {
    output.innerText = "Please enter all the inputs!";
  } else if (baseInput.value <= 0 || heightInput.value <= 0) {
    output.innerText = "Inputs should be greater than 0!";
  } else {
    const areaOfTriangle = calculateArea(
      Number(baseInput.value),
      Number(heightInput.value)
    );

    output.innerText = "Area of Traingle is " + areaOfTriangle;
  }
}

areaBtn.addEventListener("click", calculateAreaOfTriangle);

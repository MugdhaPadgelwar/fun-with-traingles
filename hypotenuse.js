const sideInputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sideInputs[0].value),
    Number(sideInputs[1].value)
  );

  const hypotenuseLength = Math.sqrt(sumOfSquares);
  output.innerText = "Length of Hypotenues is " + hypotenuseLength;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

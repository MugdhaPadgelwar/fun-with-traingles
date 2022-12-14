const inputs = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calculateSum(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    output.innerText = "Please enter all the inputs!";
  } else if (
    inputs[0].value <= 0 ||
    inputs[1].value <= 0 ||
    inputs[2].value <= 0
  ) {
    output.innerText = "Inputs should be greater than zero!";
  } else {
    const sumOfAngles = calculateSum(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );

    if (sumOfAngles === 180) {
      output.innerText = "Yay! The angles form a triangle";
    } else {
      output.innerText = "Oh no! The angles don't form a triangle";
    }
  }
}

isTraingleBtn.addEventListener("click", isTriangle);

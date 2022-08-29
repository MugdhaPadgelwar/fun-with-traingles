const inputs = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calculateSum(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
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

isTraingleBtn.addEventListener("click", isTriangle);

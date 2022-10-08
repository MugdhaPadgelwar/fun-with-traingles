const quizForm = document.querySelector(".form-container");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90", "right angled","Equilateral","Isosceles","Hypotenuse","Scalene","Polygon"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }

  output.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);

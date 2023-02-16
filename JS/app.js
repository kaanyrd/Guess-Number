"use strict";

// ELEMENTS
const infoText = document.getElementById("info-text");
const checkBtn = document.getElementById("checkBtn");
const againBtn = document.getElementById("againBtn");
let app = document.getElementById("app");
let inputValue = document.getElementById("input");
let randomInfoText = document.getElementById("secret-number");
let scoreNumber = document.getElementById("scoreNumber");

// VALUES
let highScore = 0;
let score = 20;

// RANDOM NUMBER
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

// MESSAGE FUCNTION
const messageFunction = (msg) => {
  let inputInfo = document.getElementById("info-text");
  inputInfo.textContent = msg;
  return inputInfo;
};

// INPUT
checkBtn.addEventListener("click", () => {
  let input = Number(inputValue.value);
  console.log(input);
  if (!input) {
    messageFunction("❌ Please enter a valid input");
  } else if (input === randomNumber) {
    randomInfoText.textContent = input;
    messageFunction("🎉 You win!");
    app.style.backgroundColor = "green";
    app.style.transition = "all .3s ease-out";
    if (score > highScore) {
      let highScoreText = document.getElementById("highScore");
      highScore = score;
      highScoreText.textContent = highScore;
    }
  } else if (input > randomNumber) {
    if (score > 1) {
      messageFunction("📈 Your choice hight");
      score--;
      scoreNumber.textContent = score;
      inputValue.value = "";
    } else {
      app.style.backgroundColor = "rgb(85, 0, 0)";
      app.style.transition = "all .3s ease-out";
      messageFunction("❗ You lost");
      scoreNumber.textContent = 0;
      inputValue.value = "";
    }
  } else if (input < randomNumber) {
    if (score > 1) {
      messageFunction("📉 Your choice low");
      score--;
      scoreNumber.textContent = score;
      inputValue.value = "";
    } else {
      app.style.backgroundColor = "rgb(85, 0, 0)";
      app.style.transition = "all .3s ease-out";
      messageFunction("❗ You lost");
      scoreNumber.textContent = 0;
      inputValue.value = "";
    }
  }
});

// REFRESH
againBtn.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  inputValue.value = "";
  messageFunction("💬 start guessing...");
  randomInfoText.textContent = "?";
  app.style.backgroundColor = "rgb(30,30,30)";
  scoreNumber.textContent = "20";
  score = 20;
});

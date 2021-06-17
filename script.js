"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Hurray, Correct Number!";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 30;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 27;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const manipulateStyle = function (target, style) {
  document.querySelector(target).textContent = style;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //WHEN THERE IS NO NUMBER
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ No number";
    displayMessage("⛔️ No number");

    //WHEN GUESS IS CORRECT
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent =
    //   "🎉 Hurray, Correct Number!";
    displayMessage("🎉 Hurray, Correct Number!");

    // document.querySelector(".number").textContent = secretNumber;
    manipulateStyle(".number", secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high" : "📉 Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "💥 You Lost the game";
      displayMessage("💥 You Lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //     //WHEN GUESS IS TOO HIGH
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too high";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "💥 You Lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     //WHEN GUESS IS TOO LOW
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "💥 You Lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    displayMessage("No number!");

    //When the player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    //Implementing highscore functionality
    if (highScore <= score) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;

    //When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "Too low!" : "Too high");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector("body").style.backgroundColor = "#CD5C5C";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Resetting the game
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

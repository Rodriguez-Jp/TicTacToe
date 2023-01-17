const cells = document.querySelectorAll(".cell");
let token = "X";
let currentPlayer = "Player 1";
let currentPlayerText = document.querySelector(".current");

let gameArray = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

currentPlayerText.innerText = currentPlayer;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    checkSelection(cell);
  });
});

const resetGame = () => {
  window.location.reload();
};
const checkSelection = (cell) => {
  if (cell.getAttribute("data-check") === "no") {
    feedArray(cell, token);
    cell.innerText = token;
    token === "X" ? (token = "O") : (token = "X");
    currentPlayer === "Player 1"
      ? (currentPlayer = "Player 2")
      : (currentPlayer = "Player 1");

    currentPlayerText.innerText = currentPlayer;

    cell.removeEventListener("click", checkSelection);
    cell.setAttribute("data-check", "yes");
  } else {
    alert("Celda no disponible");
  }
};

const feedArray = (cell, token) => {
  const number = parseInt(cell.getAttribute("data-id"));

  if (number <= 3) {
    gameArray[0].splice(number - 1, 1, token);
  }
  if (number > 3 && number <= 6) {
    gameArray[1].splice(number - 3 - 1, 1, token);
  }
  if (number > 6 && number <= 9) {
    gameArray[2].splice(number - 6 - 1, 1, token);
  }

  console.log(gameArray);
  checkHorizontal();
  checkVertical();
  checkDiagonal();
};

const checkHorizontal = () => {
  let row1, row2, row3;
  row1 = gameArray[0].join("");
  row2 = gameArray[1].join("");
  row3 = gameArray[2].join("");

  if (
    row1 === "XXX" ||
    row2 === "XXX" ||
    row3 === "XXX" ||
    row1 === "OOO" ||
    row2 === "OOO" ||
    row3 === "OOO"
  ) {
    setTimeout(() => {
      alert("Winner");
      resetGame();
    }, 500);
  }
};

const checkVertical = () => {
  let column1, column2, column3;
  column1 = gameArray[0][0] + gameArray[1][0] + gameArray[2][0];
  column2 = gameArray[0][1] + gameArray[1][1] + gameArray[2][1];
  column3 = gameArray[0][2] + gameArray[1][2] + gameArray[2][2];

  if (
    column1 === "XXX" ||
    column2 === "XXX" ||
    column3 === "XXX" ||
    column1 === "OOO" ||
    column2 === "OOO" ||
    column3 === "OOO"
  ) {
    setTimeout(() => {
      alert("Winner " + currentPlayer);
      resetGame();
    }, 500);
  }
};

const checkDiagonal = () => {
  let diagonal1, diagonal2;
  diagonal1 = gameArray[0][0] + gameArray[1][1] + gameArray[2][2];
  diagonal2 = gameArray[0][2] + gameArray[1][1] + gameArray[2][0];

  if (
    diagonal1 === "XXX" ||
    diagonal2 === "XXX" ||
    diagonal1 === "OOO" ||
    diagonal2 === "OOO"
  ) {
    setTimeout(() => {
      alert("Winner");
      resetGame();
    }, 500);
  }
};

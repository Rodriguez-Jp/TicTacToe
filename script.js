const cells = document.querySelectorAll(".cell");
let token = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    checkSelection(cell);
  });
});

const checkSelection = (cell) => {
  if (cell.getAttribute("data-check") === "no") {
    cell.innerText = token;
    token === "X" ? (token = "O") : (token = "X");
    cell.removeEventListener("click", checkSelection);
  }
};

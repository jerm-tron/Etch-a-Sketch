const container = document.querySelector("#container");

const square = document.createElement("div");
/* const etchDiv = document.createElement("div");
etchDiv.textContent = "div";
etchDiv.classList("squares");
container.append(etchDiv); */

function createDiv() {
  for (let i = 0; i < 272; i++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    container.append(square);
  }
}
createDiv();

const divs = document.querySelectorAll(".squares");
const squares = [...divs];

function onHoverTurnBlack(e) {
  e.target.style.backgroundColor = "black";
}
squares.forEach((div) => {
  div.addEventListener("mouseover", onHoverTurnBlack);
});



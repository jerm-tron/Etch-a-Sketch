const container = document.querySelector("#container");
//const gridDivs = document.querySelectorAll(".squares");
/* creating a grid thats 16 x 16 */

function standardGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    let divs = document.createElement("div");
    divs.classList.add("squares");
    container.appendChild(divs);
  }
}
standardGrid();

const gridDivs = document.querySelectorAll(".squares");

[...gridDivs].forEach((divs) => {
  divs.addEventListener("mouseover", onHoverTurnBlack);
});

function onHoverTurnBlack(e) {
  e.target.style.backgroundColor = "black";
}

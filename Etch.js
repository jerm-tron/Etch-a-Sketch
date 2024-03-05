const container = document.querySelector("#container");
//const gridDivs = document.querySelectorAll(".squares");
/* creating a grid thats 16 x 16 */

function standardGrid(number) {
  for (let i = 0; i < number * number; i++) {
    let divs = document.createElement("div");
    divs.style.width = 700 / number + "px";
    divs.style.height = 700 / number + "px";
    divs.classList.add("squares");
    container.appendChild(divs);
    console.log("finish  creating square");
  }
}
console.log("creating my first divs");
standardGrid(16);
console.log("created");

console.log("selecting all my divs");
let gridDivs = document.querySelectorAll(".squares");
console.log("all divs selected", gridDivs);

console.log("adding listener to each of my divs");
[...gridDivs].forEach((divs) => {
  divs.addEventListener("mouseover", onHoverTurnBlack);
});
console.log("added listener to each of my divs");

function onHoverTurnBlack(e) {
  e.target.style.backgroundColor = "black";
}

function newGrid() {
  console.log("user inputs a number from 0-100");
  let number = Number(prompt("Enter a number from 0-100", 10));
  console.log("user did input a number from 0-100");
  if (number >= 0 && number <= 100) {
    console.log("removes the divs from inside the container");
    container.innerHTML = "";
    console.log("grids removed from container");
    console.log("run standard div function with the amount user inputted");
    standardGrid(number);
    console.log("funcrtion called with user amount of divs");
    let newDivs = gridDivs = document.querySelectorAll(".squares");
    console.log("for each div run onHoverTurnBlack");
    [...gridDivs].forEach((divs) => {
      divs.addEventListener("mouseover", onHoverTurnBlack);
    });
    console.log("all divs listening", [...gridDivs]);
  }
}

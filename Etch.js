const container = document.querySelector("#container");


const etchDiv = document.createElement("div");
etchDiv.textContent = "div";
etchDiv.classList.add('squares')
container.append(etchDiv);

function createDiv() {
  for (let i = 1; i < 256; i++) {
    let square = document.createElement("div");
    container.append(square);
  } 
}
createDiv()

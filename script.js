createGrid();


function page() {
  let btnSquareNumber = document.getElementById("square-number");
  let btnBlack = document.getElementById("btn-black");
  let btnRGB = document.getElementById("btn-rgb");
  let btnBlackOpaque = document.getElementById("bnt-black-opaque");

  btnSquareNumber.addEventListener("click", changeSquaresNumber);
  btnBlack.addEventListener("click", pressBtnBlack);
  btnRGB.addEventListener("click", pressBtnRGB);
  btnBlackOpaque.addEventListener("click", pressBtnBlackOpaque);
}

function clearContainer() {
  let container = document.getElementById("container");
  container.innerHTML = "";
}

function changeSquaresNumber() {
  let newSquareNumber = parseInt(prompt("Square Number"));

  if (newSquareNumber <= 100 && newSquareNumber > 0) {
    clearContainer();
    createGrid(newSquareNumber);
  } else {
    alert("The number is not correct");
  }
}

function createGrid(newSquareNumber) {
  let container = document.getElementById("container");
  let squareNumber = newSquareNumber || 16;
  let totalSquareNumber = squareNumber * squareNumber;

  container.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${squareNumber}, 1fr)`;

  for (let i = 0; i < totalSquareNumber; i++) {
    const grid = document.createElement("div");
    container.appendChild(grid);
    grid.setAttribute("id", "grid");
  }
  page();
}

function pressBtnBlackOpaque() {  
  let grids = document.querySelectorAll("#grid");

  grids.forEach((grid) => {
        grid.addEventListener("mouseover", () =>
        changeSquareColorBlackOpaque(grid)
        );    
  });
}

function changeSquareColorBlackOpaque(grid) {
   let style = getComputedStyle(grid);
   let gridColor = style.backgroundColor;

  switch (gridColor){
    case "rgb(244, 241, 187)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.1)" ;break;
    case "rgba(0, 0, 0, 0.1)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.2)" ;break;
    case "rgba(0, 0, 0, 0.2)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.3)" ;break;
    case "rgba(0, 0, 0, 0.3)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.4)" ;break;
    case "rgba(0, 0, 0, 0.4)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.5)" ;break;
    case "rgba(0, 0, 0, 0.5)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.6)" ;break;
    case "rgba(0, 0, 0, 0.6)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.7)" ;break;
    case "rgba(0, 0, 0, 0.7)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.8)" ;break;
    case "rgba(0, 0, 0, 0.8)": grid.style.backgroundColor = "rgba(0, 0, 0, 0.9)" ;break;
    case "rgba(0, 0, 0, 0.9)": grid.style.backgroundColor = "rgba(0, 0, 0, 1)" ;break;    
  }
}

function pressBtnBlack() {
  let grids = document.querySelectorAll("#grid");

  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => changeSquareColor(grid));
  });
}

function changeSquareColor(grid) {
  grid.style.backgroundColor = "black";
}

function randomColor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeSquareColorRGB(grid) {
  grid.style.backgroundColor = `rgb(${randomColor(0, 255)}, ${randomColor(
    0,
    255
  )}, ${randomColor(0, 255)})`;
}

function pressBtnRGB() {
  let grids = document.querySelectorAll("#grid");

  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => changeSquareColorRGB(grid));
  });
}

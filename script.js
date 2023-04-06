
createGrid();
function page() {    
    let btnSquareNumber = document.getElementById('square-number');
    let btnRGB = document.getElementById('btn-rgb');
    let btnBlack = document.getElementById('btn-black');

    btnBlack.addEventListener('click', pressBtnBlack);
    btnSquareNumber.addEventListener('click', changeSquaresNumber);
    btnRGB.addEventListener('click', pressBtnRGB)   
}

function clearContainer() {
    let container = document.getElementById('container');
    container.innerHTML = '';
}

function changeSquaresNumber() {
    let newSquareNumber = parseInt(prompt('Square Number'));

    if (newSquareNumber <= 100 && newSquareNumber > 0) {
        clearContainer();        
        createGrid(newSquareNumber);        
    }
    else {
        alert('The number is not correct')
    }
}

function createGrid(newSquareNumber) {    
    let container = document.getElementById('container');
    squareNumber = newSquareNumber || 16;
    let totalSquareNumber = squareNumber * squareNumber;

    
    container.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squareNumber}, 1fr)`;
    
    for (let i = 0; i < totalSquareNumber; i++) {
        const grid = document.createElement('div');
        container.appendChild(grid);
        grid.setAttribute('id', 'grid');
    }
    page();    
}

function pressBtnBlack() {
    let grids = document.querySelectorAll('#grid');

    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => changeSquareColor(grid)); 
    });
}

function changeSquareColor(grid) {
    grid.style.backgroundColor = 'black';
}

function randomColor(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min);
}

function randomColorR() {
    return randomColor(0, 255);   
}

function randomColorG() {
    return randomColor(0, 255);
}

function randomColorB() {
    return randomColor(0, 255);
}

function changeSquareColorRGB(grid) {
    grid.style.backgroundColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;       
}
    
function pressBtnRGB() {
    let grids = document.querySelectorAll('#grid');
    
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => changeSquareColorRGB(grid)); 
    });
}



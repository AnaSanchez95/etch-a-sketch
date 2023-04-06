
createGrid();
function page() {
    
    let grids = document.querySelectorAll('#grid');
    let btnSquareNumber = document.getElementById('square-number');

    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => changeSquareColor(grid)); 
    });

    btnSquareNumber.addEventListener('click', changeSquaresNumber);    
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

function changeSquareColor(grid) {
    grid.style.backgroundColor = 'black'
}

    





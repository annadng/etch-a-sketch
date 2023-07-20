const gridContainer = document.querySelector('.grid-squares-div');

function createGrid(gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i=0; i < gridArea; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
        gridSquare.style.backgroundColor = 'grey';
        gridSquare.addEventListener('mousedown', colorPixels);
    }
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

function colorPixels() {
    this.style.backgroundColor = 'pink';
    console.log('hello');
}

window.onload = () => {
    createGrid(20);
}
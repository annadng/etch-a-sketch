const gridContainer = document.querySelector('.grid-squares-div');

function createGrid(gridSize) {
    let gridArea = gridSize * gridSize;
    for (i=0; i < gridArea; i++) {
        const gridSquares = document.createElement('div');
        gridSquares.classList.add('grid-squares');
        gridContainer.appendChild(gridSquares);
    }
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}
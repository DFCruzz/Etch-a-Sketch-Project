// Global Variables
const screenBox = document.getElementById("screenBox")
const gridSize = document.getElementById("gridSize")
const sizeSelector = document.getElementById("sizeSelector")


// UI Script and Functions
function clearGrid() {

}

function updateSizeValue() {
    
}



// Grid Script

function gridSize(boxNumber) {
    screenBox.style.gridTemplateColumns = `repeat(${boxNumber}, 1fr)`;
    screenBox.style.gridTemplateRows = `repeat(${boxNumber}, 1fr)`;

    for (let i = 0; i < boxNumber * boxNumber; i++) {
         const gridBox = document.createElement('div');
         gridBox.classList.add('grid-box')
         screenBox.appendChild(gridBox);
    }

}

gridSize(16)

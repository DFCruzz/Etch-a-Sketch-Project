// Global Variables
const screenBox = document.getElementById("screenBox")
const gridSize = document.getElementById("gridSize")
const sizeSelector = document.getElementById("sizeSelector")
const colorBtn = document.querySelector("colorBtn")



let colorBrush = true;
let rainbowBrush = false;
let eraserBrush = false;
let defaultColor = "#222222";


// UI Script and Functions
function sizeDisplay() {
    const sizeValue = sizeSelector.value;

    gridSize.innerHTML = (sizeValue + " x " + sizeValue)
}




// Grid Script and Functions
function newGridSize() {
    const sizeValue = sizeSelector.value;

    gridBox(sizeValue)
}

function gridBox(boxNumber) {
    const sizeValue = sizeSelector.value;

    boxNumber = sizeValue;

    screenBox.style.gridTemplateColumns = `repeat(${boxNumber}, 1fr)`;
    screenBox.style.gridTemplateRows = `repeat(${boxNumber}, 1fr)`;

    for (let i = 0; i < boxNumber * boxNumber; i++) {
         const gridBox = document.createElement('div');
         gridBox.classList.add('grid-box')
         screenBox.appendChild(gridBox);
    }

}

gridBox(16)

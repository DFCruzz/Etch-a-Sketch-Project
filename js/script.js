// Global Variables
const screenBox = document.getElementById("screenBox")
const gridSize = document.getElementById("gridSize")
const sizeSelector = document.getElementById("sizeSelector")
const buttons = document.querySelectorAll(".btn")
const clearBtn = document.getElementById("clearBtn")
const brushBtn = document.getElementById("brushBtn")
const rainbowBtn = document.getElementById("raindbowBtn")
const eraserBtn = document.getElementById("eraserBtn")
const colorSelector = document.getElementById("colorSelector")



// UI Script and Functions
function removeStyle(selection) {
    selection.forEach((slc) => {
        slc.classList.remove("active-btn");
        slc.classList.remove("active-rainbow-btn");
    })
}


function paintGrid(paints) {    
    paints.forEach((paint) => {
        const gridDiv = document.querySelectorAll(".screen-box > div");
        gridDiv.forEach((paint) => {
            paint.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = colorValue
            })
        })
    })
}

function modeSelection() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            removeStyle(buttons);
            paintGrid(buttons);

    
            if(button.classList.contains("brush-btn")) {
                colorValue = colorSelector.value;
                console.log(colorValue);
                buttons[0].classList.add("active-btn");      
            }
    
            else if (button.classList.contains("rainbow-btn")) {
                colorValue = rainbowMode();
                buttons[1].classList.add("active-rainbow-btn");                
            }
    
            else if (button.classList.contains("eraser-btn")) {
                colorValue = ("rgb(255, 255, 255)");
                console.log(colorValue);
                buttons[2].classList.add("active-btn");                
            }
        })
    })
}

function rainbowMode() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function sizeDisplay() {
    sizeValue = sizeSelector.value;
    gridSize.innerHTML = (sizeValue + " x " + sizeValue)
}

// Grid Script and Functions
function clearGrid() {
    sizeValue = sizeSelector.value;
    screenBox.innerHTML = '';
    gridBox(sizeValue);
}

function newGridSize() {
    sizeValue = sizeSelector.value;
    clearGrid();
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
modeSelection();
gridBox(16);


// Global Variables
const screenBox = document.getElementById("screenBox")
const gridSize = document.getElementById("gridSize")
const sizeSelector = document.getElementById("sizeSelector")
const buttons = document.querySelectorAll(".btn")
const clearBtn = document.getElementById("clearBtn")



// UI Script and Functions
function removeStyle(selection) {
    selection.forEach((slc) => {
        slc.classList.remove("active-btn");
        slc.classList.remove("active-rainbow-btn");
    })
}

function modeSelection() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            removeStyle(buttons);
    
            if(button.classList.contains("brush-btn")) {   
                buttons[0].classList.add("active-btn");
            }
    
            else if (button.classList.contains("rainbow-btn")) {
                buttons[1].classList.add("active-rainbow-btn");
            }
    
            else if (button.classList.contains("eraser-btn")) {
                buttons[2].classList.add("active-btn");
            }
        })
    })
}

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

modeSelection()
gridBox(16)


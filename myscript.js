const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333'
const drawActivate = true;
const smallSize = 10;
const medSize = 36;
const largeSize = 62;
let btnCounter = 0;

divContainer = document.querySelector(".div-container");

let currentColor = DEFAULT_COLOR;


function setColor(newColor) {
    currentColor = newColor;
}
const gridSize = document.querySelectorAll(".setting-btn");
const colorPicker = document.getElementById("color-picker");


colorPicker.oninput = (e) => setColor(e.target.value);

function clearGrid() {
    divContainer.innerHTML = '';
}

function createDivs(size) {
    console.log("Grid created")
    const squareSize = divContainer.clientWidth / size;
    for (let i = 1; i <= size*size; i++) {
        const smallDiv = document.createElement('div');
        smallDiv.id = 'div-pixel';
        divContainer.append(smallDiv);
        smallDiv.style.width = squareSize + 'px';
        smallDiv.style.height = squareSize + 'px';
    }
}
createDivs(DEFAULT_SIZE);
const pixels = document.querySelectorAll("#div-pixel");

function changeBackground(e) {

    e.target.style.backgroundColor = currentColor;
}

console.log(pixels);

pixels.forEach(function(pixel) {
    pixel.addEventListener("mouseover", changeBackground);
});

gridSize.forEach(button => {
    button.addEventListener("click", () => {
        if (button.value === "small") {
            clearGrid();
            createDivs(smallSize);
            const pixels = document.querySelectorAll("#div-pixel");
            pixels.forEach(function(pixel) {
                pixel.addEventListener("mouseover", changeBackground);
            });
            btnCounter = 1;
        }
        else if (button.value === "medium") {
            clearGrid();
            createDivs(medSize);
            const pixels = document.querySelectorAll("#div-pixel");
            pixels.forEach(function(pixel) {
                pixel.addEventListener("mouseover", changeBackground);
            });
            btnCounter = 2;
        }

        else if (button.value === "large") {
            clearGrid();
            createDivs(largeSize);
            const pixels = document.querySelectorAll("#div-pixel");
            pixels.forEach(function(pixel) {
                pixel.addEventListener("mouseover", changeBackground);
            });
            btnCounter = 3;
        }
        else {
            clearGrid();
            const pixels = document.querySelectorAll("#div-pixel");
            if (btnCounter === 0) {
                createDivs(DEFAULT_SIZE);
                const pixels = document.querySelectorAll("#div-pixel");
                pixels.forEach(function(pixel) {
                    pixel.addEventListener("mouseover", changeBackground);
                });
            }
            else if(btnCounter === 1) {
                createDivs(smallSize);
                const pixels = document.querySelectorAll("#div-pixel");
                pixels.forEach(function(pixel) {
                    pixel.addEventListener("mouseover", changeBackground);
                });
            }
            else if (btnCounter === 2) {
                createDivs(medSize);
                const pixels = document.querySelectorAll("#div-pixel");
                pixels.forEach(function(pixel) {
                pixel.addEventListener("mouseover", changeBackground);
            });
            }
            else {
                createDivs(largeSize);
                const pixels = document.querySelectorAll("#div-pixel");
                pixels.forEach(function(pixel) {
                    pixel.addEventListener("mouseover", changeBackground);
                });
            }
        }

    })
})
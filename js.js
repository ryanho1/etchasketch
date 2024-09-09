// query selectors (createdDivs is to delete the grid)
const container = document.querySelector("#container");
const userInput = document.querySelector("#userInput");
const createdDivs = document.getElementById("grid");
const gridSize = 662;
let limit = 16;

Grid(16,16);

    userInput.addEventListener("click", () =>  {
        resetGrid();
        let input = parseInt(prompt("What size of a grid would you like?"));
        if (input < 100){
            Grid(input,input);
        } else {while (input > 100) {
            input = prompt("Less than 100 please");
            if (input < 100) {
                Grid(input,input);
            }
        }
            } 
    });

function Grid(input,input) {
    for (let i = 0; i<(input*input); i++){
        let cellsize = gridSize / limit;
        const grid = document.createElement("div");
        container.appendChild(grid);
        grid.classList.add("grid");
        grid.style.width = `${cellsize}px`;
        grid.style.height = `${cellsize}px`;
        grid.addEventListener("mouseover", (event) => {
        grid.setAttribute("style", "background: black;");
        });
    }
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}




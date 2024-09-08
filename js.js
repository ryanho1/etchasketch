const container = document.querySelector("#container");
const userInput = document.querySelector("#userInput");

let input = 0;

function Grid(input,input) {



    for (let i = 0; i<(input*input); i++){
    userInput.addEventListener("click", () =>  {
        container.removeChild(grid);
        input = prompt("What grid would you like?");
    });
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        grid.addEventListener("mouseover", (event) => {
            grid.setAttribute("style", "background: black;");
        });
        // grid.addEventListener("mouseout", (event) => {
        //     grid.setAttribute("style", "background: ");
        //     });
    }
    //
}

Grid(16,16);


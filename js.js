const container = document.querySelector("#container");
// const grid = document.getElementById("grid");


//magic number - fix in future
function Grid(rows,columns) {
    for (let i = 0; i<(rows*columns); i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        // grid.textContent = i;
        grid.addEventListener("mouseover", (event) => {
            grid.setAttribute("style", "background: black;");
        });
        
        grid.addEventListener("mouseout", (event) => {
            grid.setAttribute("");
            });
    }

    
}


Grid(16,16);
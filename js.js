const container = document.querySelector("#container");
// container.style.backgroundColor = "grey";
container.style.borderColor = "black";

function Grid() {
    for (let i = 0; i<256; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        grid.textContent = "i";
    }
}

Grid();
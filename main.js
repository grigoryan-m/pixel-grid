document.addEventListener("DOMContentLoaded", () => {
    const gridSize = document.getElementById("grid-size");
    const gridContainer = document.querySelector(".grid");
    let currentColor = document.getElementById("color");

    gridSize.addEventListener("input", ()=>{
        gridContainer.innerHTML = "";
        let size = gridSize.value;

        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
        for(let i = 0; i < size; i++){
            for(let k = 0; k < size; k++){
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");
                gridItem.addEventListener("click", ()=>{
                    gridItem.style.backgroundColor = currentColor.value;
                });
                gridItem.addEventListener("contextmenu", (event)=>{
                    event.preventDefault();
                    gridItem.style.backgroundColor = "transparent";
                });
                gridContainer.appendChild(gridItem);
            }
        }
    });
    document.addEventListener("keydown", (event) => {
        if(event.keyCode === 69){
            gridContainer.innerHTML = "";
        }
    });
    
});

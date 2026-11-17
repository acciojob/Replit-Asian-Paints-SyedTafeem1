//your JS code here. If required.
const gridContainer = document.getElementById("grid-container");
const gridItem = document.querySelectorAll(".grid-item");
const blockId = document.getElementById("block_id");
const colorId = document.getElementById("colour_id");
const changeColor = document.getElementById("change_button");
const reset = document.getElementById("Reset");

changeColor.addEventListener("click",(e)=>{
	const id = blockId.value;
	const color = colorId.value;
	resetColor()
	gridItem.forEach((grid)=>{
		if(grid.id == id){
			grid.style.backgroundColor=color;
		}
	})
})

Reset.addEventListener("click",(e)=>{
	resetColor()
})
function resetColor(){
	gridItem.forEach((grid)=>{
		grid.style.backgroundColor="transparent";
	})
}

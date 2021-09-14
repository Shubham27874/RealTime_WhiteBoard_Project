let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const tool = canvas.getContext("2d");
// color -> black
// x, y, eidth, height 
// rectangle
// tool.fillRect(0, 0, canvas.width, canvas.height);
// tool.fillStyle = "white";
// tool.strokeStyle = "red";
// tool.lineWidth = 10;
// tool.strokeRect(10, 10, canvas.width/2, canvas.height / 2);
// tool.fillRect(10, 10, canvas.width/2, canvas.height / 2);

// //line draw
// tool.beginPath();
// tool.moveTo(canvas.width / 2, canvas.height / 2);
// tool.lineTo(canvas.width / 2 + 100, canvas.height / 2 + 100);
// tool.lineTo(canvas.width / 2 + 200, canvas.height / 2 + 100);
// tool.lineTo(canvas.width / 2 + 200, canvas.height / 2 + 200);
// // tool.closePath();
// tool.stroke();
let isMouseDown = false;

canvas.addEventListener("mousedown", function(e) {
    console.log("mouse down event", "x: ", e.clientX, "y: ", e.clientY);
    tool.beginPath();
    tool.moveTo(e.clientX, getCoordinates(e.clientY));
    isMouseDown = true;
})

//debouncing
canvas.addEventListener("mousemove", function(e) {
    console.log("mouse move event", "x: ", e.clientX, "y: ", e.clientY);
    if(isMouseDown){
        tool.lineTo(e.clientX, getCoordinates(e.clientY));
        tool.stroke();
    }
})

canvas.addEventListener("mouseup", function(e) {
    isMouseDown = false;
})

function getCoordinates(y) {
     let bounds = canvas.getBoundingClientRect();
     return y - bounds.y;
}

let tools = document.querySelectorAll(".tool-image");
for(let i = 0; i < tools.length; i++){
    tools[i].addEventListener("click", function(e) {
        let cTool = e.currentTarget;
        let name = cTool.getAttribute("id");
        if(name == "pencil"){
            tool.strokeStyle = "black";
        } else if(name == "eraser"){
            tool.strokeStyle = "white";
        }
    })
}
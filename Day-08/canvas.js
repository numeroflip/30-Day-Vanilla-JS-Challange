
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;

let startIndex = {
    x: 0,
    y: 0
};
let lastIndex = {
    x: 0,
    y: 0
};



let isDrawing = false;
let add = 1;
let color = undefined;

const draw = (e) => {
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startIndex.x, startIndex.y);
    ctx.lineTo(lastIndex.x, lastIndex.y);
    ctx.stroke();
    if (ctx.lineWidth >= 25 || ctx.lineWidth <= 1) add = -add;
    ctx.lineWidth += add;
}
const colorInput = document.querySelector('#colorPick');
colorInput.addEventListener('change', function(e) {
    color = colorInput.value;
    console.log(color);
})

canvas.width = window.innerWidth;

canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
        [lastIndex.x, lastIndex.y] = [e.x, e.y];
        draw();
        [startIndex.x, startIndex.y] = [e.x, e.y];
        
    }    
} )    
canvas.addEventListener('mousedown', function (e) {
    [startIndex.x, startIndex.y] = [e.x, e.y];
    isDrawing = true;
})   
canvas.addEventListener('mouseup', function (e) {
    [lastIndex.x, lastIndex.y] = [e.x, e.y];
    isDrawing = false;
} )    
canvas.addEventListener('mouseout', function (e) {
    [lastIndex.x, lastIndex.y] = [e.x, e.y];
    isDrawing = false;
} )    







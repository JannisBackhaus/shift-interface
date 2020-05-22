

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let mainColor = "#ffffff";
let backgroundColor = "#f5f5f5"
let fullX = 768;        // full width of canvas
let fullY = 768;        // full height of canvas
let halfX = fullX / 2;  // center width of canvas
let halfY = fullY / 2;  // center height of canvas
let circleRadius = 30;



function init() {
    ctx.translate(halfX, halfY); // set origin of canvas to center

}




ctx.fillStyle = backgroundColor;
ctx.fillRect(-halfX, -halfY, fullX, fullY);
ctx.strokeStyle = mainColor;
ctx.strokeRect(-halfX, -halfY, fullX, fullY);


ctx.beginPath();
ctx.arc(0, 0, circleRadius, 0, 2 * Math.PI);
ctx.fillStyle = mainColor;
ctx.fill();
ctx.strokeStyle = "#afafaf";
ctx.lineWidth = 2;

ctx.stroke();

let rectanglePair = new RectanglePair; 
ctx.rotate(45*Math.PI/180);
let rectanglePair2 = new RectanglePair; 
ctx.rotate(45*Math.PI/180);
let rectanglePair3 = new RectanglePair; 
ctx.rotate(45*Math.PI/180);
let rectanglePair4 = new RectanglePair; 
ctx.rotate(45*Math.PI/180);



/*
ctx.fillRect(- size, -halfY / 2 - size, size * 2, size * 2);
ctx.fillRect(- size, halfY / 2 - size, size * 2, size * 2);

ctx.rotate(45*Math.PI/180);
ctx.fillRect(- size, -halfY / 2 - size, size * 2, size * 2);
ctx.fillRect(- size, halfY / 2 - size, size * 2, size * 2);

ctx.rotate(45*Math.PI/180);
ctx.fillRect(- size, -halfY / 2 - size, size * 2, size * 2);
ctx.fillRect(- size, halfY / 2 - size, size * 2, size * 2);

ctx.rotate(45*Math.PI/180);
ctx.fillRect(- size, -halfY / 2 - size, size * 2, size * 2);
ctx.fillRect(- size, halfY / 2 - size, size * 2, size * 2);

ctx.fillRect(centerX - size, centerY - size - centerY / 2, size * 2, size * 2);
ctx.fillRect(centerX - size, centerY - size + centerY / 2, size * 2, size * 2);

*/

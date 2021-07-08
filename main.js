const blue = "#0000ff"
let drawCircle = function (x, y, radius) {
	context.beginPath();
	context.fillStyle = blue;
	context.arc(x, y, radius, 0, Math.PI * 2, false);
	context.closePath();
}

let drawWindow = function() {
	context.clearRect(0,0,300,300);
}

let canvas = document.getElementById("canvas");
context = canvas.getContext('2d');

x = 0;
y = 0;

function draw(){
	document.addEventListener('mousemove', (event) => {
		xMouse = event.clientX;
		yMouse = event.clientY;
	});	

	deltaX = xMouse - x; //calculate vector pointing from ball to mouse
	deltaY = yMouse - y; 

	x = x + 0.01 * deltaX;
	y = y + 0.01 * deltaY;

	drawWindow();
    drawCircle(x,y,5);
};

setInterval(draw,10); 






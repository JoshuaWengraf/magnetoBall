const blue = "#0000ff"

document.addEventListener('mousemove', (event) => {
    x = event.clientX;
    y = event.clientY;

    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});	

var canvas = document.getElementById("canvas");
  
function draw(){


    context = canvas.getContext('2d');
	context.clearRect(0,0,300,300);

    context.beginPath();
	context.fillStyle = blue;
	context.arc(x, y, 20, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
};

setInterval(draw,10); 






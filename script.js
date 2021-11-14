const canvas = document.getElementById( "canvas1" );
var ctx = canvas.getContext( "2d" );
canvas.width = 640;
canvas.height = 480;

function drawBall(x,y,r) {
    ctx.beginPath();
    ctx.arc( x, y, r, 0, 2 * Math.PI );
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}

drawBall( 100, 100, 20 );
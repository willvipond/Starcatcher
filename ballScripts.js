console.clear();
var balls = [];
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function makeBall(x, y, r, c,dx,dy) {
  var ball = []
  ball.x = x;
  ball.y = y;
  ball.r = r;
  ball.c = c;
  ball.dx = dx | 1;
  ball.dy = dy;
  return ball;
}

balls.push(makeBall(40, 50, 10, "red",1,4))
balls.push(makeBall(60, 80, 15, "blue",30,20))
balls.push(makeBall(90, 40, 5, "green",1,4))
console.log("balls", balls)

function drawBalls(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(var i = 0;i< balls.length; i++){
    ctx.beginPath();
    ctx.fillStyle=balls[i].c;
    ctx.arc(balls[i].x,balls[i].y,balls[i].r,0,2*Math.PI);
    ctx.fill();
  }
}

drawBalls();
function move(e){
  for(var i = 0; i<balls.length; i++){
    balls[i].x += balls[i].dx; 
    balls[i].y += balls[i].dy; 
  }
  drawBalls();
  window.requestAnimationFrame(move);

}
$("#moveMe").click(move)


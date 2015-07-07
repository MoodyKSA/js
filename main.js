window.onload = function(){

  // settings
  var canvas;
  var ctx;
  var W,H

  init()
  function init(){
    console.log('Initializing...');
    canvas = document.getElementById('c');
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    W = canvas.width
    H = canvas.height
  }

  var x=20, y=20,
      xspeed= 1, yspeed=2

  function draw(){
    ctx.fillStyle = "rgba(0,0,0,0.4)"
    ctx.fillRect(0,0,W,H);
    ctx.fillStyle = "rgba(255,0,0,1)"
    ctx.fillRect(x,y,20,20);
  }

  function update(){

    if(x > W-20 || x < 0) xspeed *= -1
    if(y > H-20 || y < 0) yspeed *= -1

    x += xspeed
    y += yspeed
    draw()
  }

  setInterval(update,10)
}

var clap = new Audio("clap-808.wav");
var hat = new Audio("hihat-acoustic01.wav");
var snare= new Audio("snare-acoustic01.wav");
var kick = new Audio("kick-acoustic01.wav");

A = 65;
S = 83;
D = 68;
F = 70;
currentSound = clap;
$(document).keydown(function(event) {
  keyCode = event.keyCode;
  console.log(keyCode);
  if(keyCode == A){
  currentSound.pause();
  currentSound.currentTime = 0;
  clap.play();
  currentSound = clap;
  console.log(A);
  	//$("#clap").css(-webkitAnimationPlayState) = 'paused';
  	 $("#clap").removeClass("color");
     setTimeout(function() {
         $("#clap").addClass("color");
     }, 10);
  }
  else if(keyCode == S){
  currentSound.pause();
  currentSound.currentTime = 0;
  hat.play();
  currentSound = hat;
  console.log(S);
  	$("#hat").removeClass("color");
     setTimeout(function() {
         $("#hat").addClass("color");
     }, 10);

  }
  else if(keyCode == D){
  currentSound.pause();
  currentSound.currentTime = 0;
  snare.play();
  currentSound = snare;
  console.log(D);
  $("#snare").removeClass("color");
     setTimeout(function() {
         $("#snare").addClass("color");
     }, 10);
  }
  else if(keyCode == F){
  currentSound.pause();
  currentSound.currentTime = 0;
  kick.play();
  currentSound = kick;
  console.log(F);
  $("#kick").removeClass("color");
     setTimeout(function() {
         $("#kick").addClass("color");
     }, 10);
  }
});

function circ(x, y, rad, c) {
    ctxS.fillStyle = c;
    ctxS.beginPath();
    ctxS.arc(x, y, rad, 0, 2 * Math.PI, false);
    ctxS.closePath();
    ctxS.fill();
}
function draw() {
    for (var i = circles.length - 1; i >= 0; --i) {
        circ(circles[i].x, circles[i].y, circles[i].radius, circles[i].colour);
        circles[i].radius += 3;
        if (circles[i].radius > canvas.width) circles.splice(i,1);
    }

    ctx.drawImage(scratch, 0, 0);
    window.webkitRequestAnimationFrame(draw);
}

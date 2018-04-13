/*
  @italoadler 2018
  @piece: linhas sonoras
*/

let posx, posy;


function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  stroke(255); 
  strokeWeight(5);
}

function draw() {
  
  if(mouseIsPressed) {
    line(mouseX,mouseY,pmouseX,pmouseY);

  } else {
    
  }

}

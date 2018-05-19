/*
  @italoadler 2018
  @piece: linhas sonoras

*/

let posx, posy;

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.8;
var decayTime = 0.5;
var susPercent = 0.9  ;
var releaseTime = 1.2;
var overdub = [[]];

var mic, recorder,soundFile;
var state = 0;


var env, triOsc;

var mod = false;
var mod2 = false;
var mod3 = false;





function setup() {
  var cnv =   createCanvas(displayWidth, displayHeight);
  background(255);
  stroke(255);


  strokeWeight(0.8);
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();

  triOsc2 = new p5.Oscillator('sine');
  triOsc2.amp(env);
  triOsc2.start();

  triOsc3 = new p5.Oscillator('sine');
  triOsc3.amp(env);
  triOsc3.start();

  cnv.mousePressed(playEnv);

  // mic = new p5.AudioIn();
  //
  //
  // mic.start();
  // recorder = new p5.SoundRecorder();
  // recorder.setInput(mic);
  // soundFile = new p5.SoundFile();
}

function draw() {

}
function playEnv(){
 env.play();
}


function mousePressed() {
  firstX = mouseX;
}

function mouseDragged() {
  var i,j = 0;
  var green = map(mouseX, 0, width, 50, 255);
  var blue = map(mouseY, 0, width, 0, 255);
  var red = dist(mouseX,mouseY,width/2,height/2);
  var speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  var alpha = map(speed, 0, 20, 0, 10);
  var lineWidth = map(speed, 0, 10, 10, 1);
  lineWidth = constrain(lineWidth, 1.2, 10);

  noStroke();
  fill(0, alpha);
  rect(0, 0, width, height);

  stroke(red, green, blue, 255);
  strokeWeight(lineWidth);
  //line(mouseX,mouseY,pmouseX,pmouseY);
  lineS(mouseX,mouseY,pmouseX,pmouseY,lineWidth);
  triOsc.freq(map(mouseY,0,height,80,3000));
  triOsc2.freq(map(mouseX,0,width,80,440));
  overdub[i] = mouseX;
  overdub[j] = mouseY;
  i++;
  j++;
}

function mouseReleased() {
  triOsc3.freq(dist(mouseX,firstX,))
  for(var i = 0; i < overdub.length; i++) {
    triOsc3.freq(map(i,0,width,80,110))
  }
}


function lineS(x,y,px,py,lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  line(px,height/2+((height/2)-py),x,height/2+((height/2)-y));
  line(width/2+((width/2)-px),height/2+((height/2)-py),width/2+((width/2)-x),height/2+((height/2)-y));
  return;
}


function keyPressed() {

}

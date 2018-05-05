/*
  @italoadler 2018
  @piece: linhas sonoras
*/

let posx, posy;

var attackLevel = 1.0;
var releaseLevel = 0  ;

var attackTime = 0.008
var decayTime = 2.9;
var susPercent = 0.2;
var releaseTime = 1.8;

var env, triOsc;

var mod = false;
var mod2 = false;
var mod3 = false;

function setup() {
  var cnv =   createCanvas(displayWidth, displayHeight);
  background(0);
  stroke(255);
  noCursor();

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
}

function draw() {
  if(mouseIsPressed) {
    line(mouseX,mouseY,pmouseX,pmouseY);
    triOsc.freq(map(mouseY,0,height, 110,800));
    triOsc2.freq(map(mouseX,0,width,20,5000));
    triOsc2.freq(map(dist(mouseX,width/2,0,1,100,400)));
  }
}
function playEnv(){
  env.play();
}

function keyPressed() {
}

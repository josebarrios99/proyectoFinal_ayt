// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

var inc;
var scl = 5;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var np;

var flowfield;

var angulo;

var colores;
var colores2;
var colores3;

let academicas;
let amigos;
let calmado;
let deportivas;
let descanso;
let enojado;
let extrovertida;
let familiares;
let introvertida;
let parejas;
let positivo;
let racional;
let sensible;
let triste;











let activado;

function preload() {
  // Load a sound file
academicas= loadSound('./sonidos/Académicas.mp3');
amigos= loadSound('./sonidos/Amigos.mp3');
calmado= loadSound('./sonidos/Calmado.mp3');
deportivas= loadSound('./sonidos/Deportivas.mp3');
descanso= loadSound('./sonidos/Descanso.mp3');
enojado= loadSound('./sonidos/Enojado.mp3');
extrovertida= loadSound('./sonidos/Extrovertida.mp3');
familiares= loadSound('./sonidos/Familiares.mp3');
introvertida= loadSound('./sonidos/Introvertida.mp3');
parejas= loadSound('./sonidos/Parejas.mp3');
positivo= loadSound('./sonidos/Positivo.mp3');
racional= loadSound('./sonidos/Racional.mp3');
sensible= loadSound('./sonidos/Sensible.mp3');
triste= loadSound('./sonidos/Triste.mp3');

}

function setup() {
  angulo = 0;
  colores = 255;
  inc=0.1;
  np=400;
  activado = false
  console.log("peticio")
  background(0);
  
  createCanvas(1200, 700);
}

function draw() {
  
  if (activado==true) {
    //sonido();
  }
  console.log(activado)
  drawGeneral();
}

function respuesta1(pregunta){
  if (pregunta==0) {
    colores = 100;
    amigos.loop();

    console.log("peti")
    setupgeneral();
  }else if(pregunta==1){
    colores = 250;
    setupgeneral();
  }else if(pregunta==2){
    colores = 300;
    setupgeneral();
  }else if(pregunta==3){
    colores = 360;
    setupgeneral();
    console.log(np);
  }
}
function respuesta2(pregunta){
  if (pregunta==0) {
    sensible.loop();
    amigos.pause();
    angulo = 1;
    setupgeneral();
  }else if(pregunta==1){
    angulo = 2;
    sensible.loop();
    setupgeneral();
  }else if(pregunta==2){
    angulo = 2.5;
    setupgeneral();
  }else if(pregunta==3){
    angulo = 4;
    setupgeneral();
    console.log(np);
  }
}
function respuesta3(pregunta){
  if (pregunta==0) {
    racional.loop();
    np=300;
    setupgeneral();
  }else if(pregunta==1){
    np = 200;
    setupgeneral();
  }else if(pregunta==2){
    np = 100;
    setupgeneral();
  }else if(pregunta==3){
    np = 50;
    setupgeneral();
    console.log(np);
  }
}
function respuesta4(pregunta){
  if (pregunta==0) {
    racional.loop();
    inc=0.1;
    setupgeneral();
  }else if(pregunta==1){
    inc=5;
    setupgeneral();
  }else if(pregunta==2){
    inc=3;
    setupgeneral();
  }else if(pregunta==3){
    inc=2;

    setupgeneral();
    console.log(np);
  }
}

function drawGeneral(){
  var yoff = 50;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * angulo;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}
function sonido(){
  let volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  amigos.amp(volume);

  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  amigos.rate(speed);
}
function activar(){
  activado=true;
}

function setupgeneral(){
  createCanvas(1500, 750);
  colorMode(HSB, colores);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  flowfield = new Array(cols * rows);
  for (var i = 0; i < np; i++) {
    particles[i] = new Particle();
  }
  background(255);
  console.log(np);
}


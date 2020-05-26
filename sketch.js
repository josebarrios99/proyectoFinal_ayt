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
let solos;
let artisticas;










let activado;

function preload() {
  // Load a sound file
academicas= loadSound('./sonidos/Académicas.mp3');
artisticas= loadSound('./sonidos/Artisticas.mp3');
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
solos= loadSound('./sonidos/Solos.mp3');

}

function setup() {
  angulo = 0;
  colores = 255;
  colores2 = 255;
  colores3 = 255;
  inc=0.1;
  np=400;
  activado = false
  console.log("peticio")
  background(0);
  
  createCanvas(1200, 700);
}

function draw() {
  
  if (activado==true) {
    sonido();
  }
  drawGeneral();
}

function respuesta1(pregunta){
  if (pregunta==0) {
    artisticas.loop();
    colores = 100;
    colores2 = 360;
    colores3 = 100;
    setupgeneral();
  }else if(pregunta==1){
    familiares.loop();
    colores = 250;
    colores2 = 360;
    colores3 = 100;
    setupgeneral();
  }else if(pregunta==2){
    enojado.loop();
    colores = 360;
    colores2 = 360;
    colores3 = 360;
    setupgeneral();
  }else if(pregunta==3){
    sensible.loop();
    colores = 360;
    setupgeneral();
    console.log(np);
  }
}
function respuesta2(pregunta){
  if (pregunta==0) {
    deportivas.loop();
    angulo = 1;
    setupgeneral();
  }else if(pregunta==1){
    angulo = -3;
    parejas.loop();
    setupgeneral();
  }else if(pregunta==2){
    calmado.loop();
    angulo = -1;
    setupgeneral();
  }else if(pregunta==3){
    racional.loop();
    angulo = 4;
    setupgeneral();
    console.log(np);
  }
}
function respuesta3(pregunta){
  if (pregunta==0) {
    academicas.loop();
    np=200;
    setupgeneral();
  }else if(pregunta==1){
    np = 150;
    angulo=1.5;
    amigos.loop();
    setupgeneral();
  }else if(pregunta==2){
    np = 70;
    triste.loop();
    setupgeneral();
  }else if(pregunta==3){
    np = 10;
    extrovertida.loop();
    setupgeneral();
    console.log(np);
  }
}
function respuesta4(pregunta){
  if (pregunta==0) {
    descanso.loop();
    inc=0.00005;
    setupgeneral();
  }else if(pregunta==1){
    solos.loop();
    inc=-0.5;
    colores=40;
    setupgeneral();
  }else if(pregunta==2){
    positivo.loop();
    inc=0.3;
    colores=360;
    setupgeneral();
  }else if(pregunta==3){
    inc=2;
    angulo=-2;
    introvertida.loop();
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
  academicas.amp(volume);
  amigos.amp(volume);
  artisticas.amp(volume);
  calmado.amp(volume);
  deportivas.amp(volume);
  descanso.amp(volume);
  enojado.amp(volume);
  extrovertida.amp(volume);
  familiares.amp(volume);
  introvertida.amp(volume);
  parejas.amp(volume);
  positivo.amp(volume);
  racional.amp(volume);
  sensible.amp(volume);
  solos.amp(volume);
  triste.amp(volume);


  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  academicas.rate(speed);
  amigos.rate(speed);
  artisticas.rate(speed);
  calmado.rate(speed);
  deportivas.rate(speed);
  descanso.rate(speed);
  enojado.rate(speed);
  extrovertida.rate(speed);
  familiares.rate(speed);
  introvertida.rate(speed);
  parejas.rate(speed);
  positivo.rate(speed);
  racional.rate(speed);
  sensible.rate(speed);
  solos.rate(speed);
  triste.rate(speed);
}
function activar(){
  activado=true;
}

function setupgeneral(){
  createCanvas(1500, 750);
  colorMode(HSB, colores,colores2,colores3);
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


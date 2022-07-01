var c = document.getElementById("canvas");
var lienzo = c.getContext("2d");
var lWidth = document.getElementById("anchoLinea"); //ancho de la linea desde el document
var colorPicker = document.getElementById("color_Picker"); //color desde el document
c.addEventListener("mousedown", pulsarMouse); //el listener se agrega solo al canvas porque solo esa area interesa
c.addEventListener("mousemove", moverMouse);
c.addEventListener("mouseup", soltarMouse);
var x;
var y;
var dibujar = false;
function pulsarMouse(eventoMouse) {
  dibujar = true;
  x = eventoMouse.offsetX;
  y = eventoMouse.offsetY;
}
function moverMouse(eventoMouse) {
  var myLinewidth = lWidth.value; //ancho de la linea
  var colorLinea = colorPicker.value; //color de la linea
  if (dibujar == true) {
    dibujarLinea(colorLinea, myLinewidth, x, y, eventoMouse.offsetX, eventoMouse.offsetY);
    x = eventoMouse.offsetX; // guarda la posicion de x
    y = eventoMouse.offsetY; // guarda la posicion de y
  } else {
    x = eventoMouse.offsetX;
    y = eventoMouse.offsetY;
  }
}
function soltarMouse(eventoMouse) {
  dibujar = false;
}
function dibujarLinea(color, lAncho, xinicial, yinicial, xfinal, yfinal) { //En el paréntesis vamos a declarar las variables que van a cambiar cada que se ejecute la fucnción. En gral las funciones se ejectutan automáticamente excepto cuando los parámetros están declarados
  lienzo.beginPath(); // orden para comenzar a dibujar
  lienzo.strokeStyle = color;
  lienzo.lineWidth = lAncho;
  lienzo.lineJoin = 'round';
  lienzo.lineCap = 'round';
  lienzo.moveTo(xinicial, yinicial); //punto inicial de la linea
  lienzo.lineTo(xfinal, yfinal); //punto de llegada de la línea
  lienzo.stroke();
  lienzo.closePath(); //finalizar la línea y dejar de dibujar
  //console.log(lienzo);
}
function resetLienzo() {
  lienzo.clearRect(0, 0, c.width, c.height);
}
function erase() {
  lienzo.globalCompositeOperation = 'destination-out'
}
function pencil() {
  lienzo.globalCompositeOperation = 'source-over'
}

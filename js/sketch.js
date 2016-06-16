var num = 60;
var x = [];
var y = [];
var cnv;

//
// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }

function setup() {
  var cnv = createCanvas(426, 900);
  // Move the canvas so it's inside our <div id="sketch-holder">.
  cnv.parent('sketch-holder');
  noStroke();


  for (var i = 0; i < num; i++) {
    x[i] = 0
    y[i] = 0
  }

}
// function windowResized() {
//   centerCanvas();
// }

function draw() {
  background(0)

  //copy array values from back to front
  for (var i = num - 1; i > 0; i--) {
    x[i] = x[i - 1]
    y[i] = y[i - 1]
  }
  x[0] = mouseX; //set the first element
  y[0] = mouseY; // set the first element
  for (var i = 0; i < num; i++) {
    fill(i * 4);
    ellipse(x[i], y[i], 140, 140);

  }

  // for (var h = 32; h <= height; h +=8){
  //   for(var m = 12; m <= width; m += 15) {
  //     ellipse(m+h, h, 16 - h/10.0, 16 - h/10.0);
  //   }
  // }
}

// background(204);
// beginShape();
// vertex(180,82);
// vertex(207,36);
// vertex(214,63);
// vertex(407,11);
// vertex(412,30);
// vertex(219,82);
// vertex(226,109);
// endShape();
// arrow

//   if(mouseIsPressed){
//   fill(22);
// }
// else{
//   fill(255);
// }
// rect(mouseX, mouseY,110,60,220,40)
// draw circles

// translate(mouseX,mouseY);
// translate(35,10);
// rect(0,0,30,30);



// quad(158,55,199,14,392,66,351,107);
// triangle(347,54,392,9,392,66);
// triangle(158,55,290,91,290,112);
// odd shape

// rect(110,60,220,40)
// rectangle

// arc(90,60,80,80,0,HALF_PI);
// arc(190,60,80,80,0,PI+HALF_PI);
// half a circle

// ellipse(132,0,190,190);
// fill(204,104,53,160)
// strokeWeight(25)
// ellipse(228,-16,190,190);
// fill(154,22,255,160)
// ellipse(228,118,190,190);
// fill(102,102,85,160)
// strokeWeight(5)
// rect(160,40,260,20)

// ROBOT method 1
// background(111)
// // Neck
// stroke(102);           //gray
// line(266,257,266,162); //left
// line(266,257,266,162); //middle
// line(266,257,266,162); //right

// Antennae

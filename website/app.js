var app = angular.module('app', ['ui.router','angular-p5']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })
})


//<=================P5 factories ==================>


angular.module('app').factory('randomColor', ['p5', function(p5) {

  var num = 60;
  var x = [];
  var y = [];
  var cnv;


  return function(p) {
    var r = p.random(0, 255);
    var g = p.random(0, 255);

    p.setup = function() {
      p.createCanvas(480, 510);
      p.noStroke();
    };

    p.draw = function() {
      var colorAngle = p.radians(p.frameCount);
      var colorVector = p5.Vector.fromAngle(colorAngle).setMag(255);

     //  p.background(r, g, colorVector.x);
      p.fill(r, g, colorVector.y);

      p.background(r, g, colorVector.x)
      p.rect(0, 0, p.width / 2, p.height);

      //copy array values from back to front
      for (var i = num - 1; i > 0; i--) {
        x[i] = x[i - 1]
        y[i] = y[i - 1]
      }
      x[0] = p.mouseX; //set the first element
      y[0] = p.mouseY; // set the first element
      for (var i = 0; i < num; i++) {
        p.fill(i * 4);
        p.ellipse(x[i], y[i], 120, 120);

      }
    }
  };
}]);


//======== WORM =======//
angular.module('app').factory('worm', ['p5', function(p5) {

var num = 60;
var x = [];
var y = [];
var cnv;


return function(p){
var r = p.random(0, 255);
var g = p.random(0, 255);

  p.setup = function() {
  var cnv = p.createCanvas(875, 510);
   // Move the canvas so it's inside our <div id="sketch-holder">.
   cnv.parent('sketch-holder');
   p.noStroke();

   for (var i = 0; i < num; i++) {
     x[i] = 0
     y[i] = 0
   }

 }
 // function windowResized() {
 //   centerCanvas();
 // }

 p.draw = function() {
   var colorAngle = p.radians(p.frameCount);
   var colorVector = p5.Vector.fromAngle(colorAngle).setMag(255);

  //  p.background(r, g, colorVector.x);
   p.fill(r, g, colorVector.y);

   p.background(r, g, colorVector.x)
   p.rect(0, 0, p.width / 2, p.height);

   //copy array values from back to front
   for (var i = num - 1; i > 0; i--) {
     x[i] = x[i - 1]
     y[i] = y[i - 1]
   }
   x[0] = p.mouseX; //set the first element
   y[0] = p.mouseY; // set the first element
   for (var i = 0; i < num; i++) {
     p.fill(i * 4);
     p.ellipse(x[i], y[i], 120, 120);

   }
 }

}


}]);
angular.module('app').factory('worm2', ['p5', function(p5) {

var num = 60;
var x = [];
var y = [];
var cnv;


return function(p){

  p.setup = function() {
  var cnv = p.createCanvas(1280, 400);
   // Move the canvas so it's inside our <div id="sketch-holder">.
   cnv.parent('sketch-holder');
   p.noStroke();

   for (var i = 0; i < num; i++) {
     x[i] = 0
     y[i] = 0
   }

 }
 // function windowResized() {
 //   centerCanvas();
 // }

 p.draw = function() {
   var r = p.random(20, 50);
   var g = p.random(20, 50);
   var colorAngle = p.radians(p.frameCount);
   var colorVector = p5.Vector.fromAngle(colorAngle).setMag(255);

  //  p.background(r, g, colorVector.x);
   p.fill(r, g, colorVector.y);

   p.background(r, g, colorVector.x)
   p.rect(0, 0, p.width / 2, p.height);
  //  p.background(0,125,82)

   //copy array values from back to front
   for (var i = num - 1; i > 0; i--) {
     x[i] = x[i - 1]
     y[i] = y[i - 1]
   }
   x[0] = p.mouseX; //set the first element
   y[0] = p.mouseY; // set the first element
   for (var i = 0; i < num; i++) {
     p.fill(i * 4);
     p.ellipse(x[i], y[i], 120,120);

   }

   // for (var h = 32; h <= height; h +=8){
   //   for(var m = 12; m <= width; m += 15) {
   //     ellipse(m+h, h, 16 - h/10.0, 16 - h/10.0);
   //   }
   // }
 }

}


}]);

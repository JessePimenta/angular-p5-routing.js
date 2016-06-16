var app = angular.module('app', ['ui.router','angular-p5']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })
  .state('lightworks', {
    url: '/lightworks',
    templateUrl: 'templates/lightworks.html'
  })
  .state('ballpit-sculpture', {
    url: '/ballpit-sculpture',
    templateUrl: 'templates/ballpit-sculpture.html'
  })
  .state('instant-abstract-expressionism', {
    url: '/instant-abstract-expressionism',
    templateUrl: 'templates/instant-expressionism.html'
  })
  .state('design', {
    url: '/design',
    templateUrl: 'templates/design.html'
  })
  .state('projects', {
    url: '/projects',
    templateUrl: 'templates/projects.html'
  })
  .state('sound-design', {
    url: '/sound-design',
    templateUrl: 'templates/sound-design.html'
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


//<======== "WORM"  /home =======>
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

// flashing lights
angular.module('app').factory('instantExpressionism', ['p5', function(p5) {

var num = 300;
var x = [];
var y = [];
var cnv;
var randNum;


return function(p){
  p.setup = function() {
  var cnv = p.createCanvas(875, 710);
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
   var randNum = p.random(1500,800)
   var r = p.random(0, 255);
   var g = p.random(0, 255);


   var colorAngle = p.radians(p.frameCount);
   var colorVector = p5.Vector.fromAngle(colorAngle).setMag(255);
   p.background(randNum - randNum,0)


   //copy array values from back to front
   for (var i = num - 1; i > 0; i--) {
     x[i] = x[i - 1]
     y[i] = y[i - 1]
   }
   x[0] = p.mouseX; //set the first element
   y[0] = p.mouseY; // set the first element

   for (var i = 0; i < num; i++) {
     p.fill(r, g, colorVector.y, i * 20);
    //  p.stroke(255);

    //  p.fill(i * 4);
     p.ellipse(x[i], y[i], 10,10);

   }
   p.ellipse(p.random(900), p.random(1200), 5, 5);
   p.ellipse(p.random(900), p.random(1200), 10, 10);
   p.ellipse(p.random(900), p.random(1200), 20, 20);
   p.ellipse(p.random(900), p.random(1200), 20, 20);
 }

}


}]);

// flashing lights
angular.module('app').factory('lightworks', ['p5', function(p5) {

var num = 300;
var x = [];
var y = [];
var cnv;
var randNum;


return function(p){
  p.setup = function() {
  var cnv = p.createCanvas(875, 710);
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
   var randNum = p.random(1500,800)
   var r = p.random(0, 255);
   var g = p.random(0, 255);


   var colorAngle = p.radians(p.frameCount);
   var colorVector = p5.Vector.fromAngle(colorAngle).setMag(255);
   p.background(0)


   //copy array values from back to front
   for (var i = num - 1; i > 0; i--) {
     x[i] = x[i - 1]
     y[i] = y[i - 1]
   }
   x[0] = p.mouseX; //set the first element
   y[0] = p.mouseY; // set the first element

   for (var i = 0; i < num; i++) {
     p.fill(r, g, colorVector.y, i * 20);
    //  p.stroke(255);

    //  p.fill(i * 4);
     p.ellipse(x[i], y[i], 10,10);

   }
   p.ellipse(p.random(1200), p.random(1200), 5, 5);
   p.ellipse(p.random(700), p.random(1200), 10, 10);
   p.ellipse(p.random(700), p.random(1200), 30, 30);
   p.ellipse(p.random(1200), p.random(1200), 5, 5);
   p.ellipse(p.random(1200), p.random(1200), 20, 20);
   p.ellipse(p.random(700), p.random(1200), 30, 30);
   p.ellipse(p.random(1200), p.random(1200), 35, 35);
 }

}


}]);

// ballpit Sculpture
angular.module('app').factory('ballpitSculpture', ['p5', function(p5) {

var num = 300;
var x = [];
var y = [];
var cnv;
var randNum;


return function(p){
  p.setup = function() {
  var cnv = p.createCanvas(875, 710);
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
   var randNum = p.random(1500,800)
   var r = p.random(0, 255);
   var g = p.random(0, 255);


   var colorAngle = p.radians(p.frameCount);
   var colorVector = p5.Vector.fromAngle(colorAngle).setMag(255);
   p.background(randNum - randNum,0)


   //copy array values from back to front
   for (var i = num - 1; i > 0; i--) {
     x[i] = x[i - 1]
     y[i] = y[i - 1]
   }
   x[0] = p.mouseX; //set the first element
   y[0] = p.mouseY; // set the first element

   for (var i = 0; i < num; i++) {
     p.fill(r, g, colorVector.y, i * 20);
     p.stroke(255);

    //  p.fill(i * 4);
     p.ellipse(x[i], y[i], 70,70);

   }
  //  p.ellipse(p.random(700), p.random(1200), 5, 5);
  //  p.ellipse(p.random(700), p.random(1200), 10, 10);
  //  p.ellipse(p.random(700), p.random(1200), 20, 20);
 }

}


}]);
//

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


//
// function animateCtrl() {
//   var self = this;
//
//   self.shown = false;
// }
//
// angular.module('app', ['ngAnimate'])
// .controller('animateCtrl', animateCtrl)

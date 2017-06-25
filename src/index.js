'use strict';

import * as pillow from 'pillowjs';

import Timer from './timer';
import Loader from './loader';

const {
  Screen,
  Mouse,
  Img,
  RenderObjectModel
} = pillow;

var canvas = document.getElementById('screen');
var canvasW = 800;
var canvasH = 600;
canvas.width = canvasW;
canvas.height = canvasH;

var screen = new Screen({
  container: canvas,
  width: canvasW,
  height: canvasH,
  x: 0,
  y: 0
});

screen.update(function () {

});

Loader.ready(resource => {

  var container = new RenderObjectModel({
    x: 0,
    y: 0,
    width: resource['logo'].width,
    height: resource['logo'].height
  });

  screen.append(container);

  var image = new Img({
    x: 0,
    y: 0,
    width: resource['logo'].width,
    height: resource['logo'].height,
    image: resource['logo'].image,
    scalev: pillow.Math.getRandom(500, 1000) / 1000
  });

  container.append(image);

  container.update(function() {
    this.y++;
    this.x++;
    this.rotation++;
    this.scaleX += this.scalev;
    this.scaleY += this.scalev;
  });

  new Mouse({
    screen: screen
  });

  var timer = Timer(() => {
    screen.run()
  });

  setTimeout(() => {
    timer.toggle();
  }, 10 * 1000);
});

'use strict'

import {
  Timer,
  FPSBoard
} from 'pillowjs';

module.exports = handle => {
  var timer = new Timer()

  var fpsBoard = new FPSBoard({
    container: '#app',
    width: 100,
    height: 60,
    boardColor: '#222',
    textColor: '#d2ff1d',
    containerStyles: {
      position: 'absolute'
    }
  })
  timer.update(function () {
    handle.call(this)
    fpsBoard.tick()
  })

  timer.start()

  return timer;
};

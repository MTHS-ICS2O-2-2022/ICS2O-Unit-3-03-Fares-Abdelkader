// Created by: Fares.Abdelkader
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of sphere.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById('radius-sphere').value)

  // process 
  const volume = 4 / 3 * Math.PI *  Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'volume is: ' + volume + 'cm³'
}
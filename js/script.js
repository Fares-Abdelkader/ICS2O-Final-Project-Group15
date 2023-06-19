// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: June 2023
// This file contains the JS functions for index.html

"use strict"

function coinFlip() {
    // this function shows the outcome of a coin flip
    const flip = Math.random()
    if (flip < 0.5) {
        document.getElementById('results').innerHTML = "You landed on heads!"
    } else {
        document.getElementById('results').innerHTML = "You landed on tails!"
}

// show image of heads or tails
if (flip < 0.5) {
    document.getElementById('coin').innerHTML = "<img src='images/heads.png' alt='heads' height='200' width='200'>"
} else {
    document.getElementById('coin').innerHTML = "<img src='images/tails.png' alt='tails' height='200' width='200'>"
}
}
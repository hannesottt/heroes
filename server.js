"use strict";
exports.__esModule = true;
var superheroes = require("Superheroes");
var supervillains = require("supervillains");
console.log('//superhero');
var superheroName = superheroes.random();
console.log(superheroName);
console.log('//all villains');
var allVillains = supervillains.all;
allVillains.forEach(function (element) {
    console.log(element);
});
console.log('//random villain');
var randomVillain = supervillains.random();
console.log(randomVillain);

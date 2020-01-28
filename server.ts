import * as superheroes from 'Superheroes';
import * as supervillains from 'supervillains';

console.log('//superhero');
var superheroName : string = superheroes.random();
console.log(superheroName);

console.log('//all villains');
var allVillains :  ReadonlyArray<string> = supervillains.all;
allVillains.forEach(element => {
	console.log(element);
});

console.log('//random villain');
var randomVillain : string = supervillains.random();
console.log(randomVillain);
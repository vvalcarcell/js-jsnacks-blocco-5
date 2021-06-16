var triangoloRett = {
    base: 10,
    altezza: 15
}

var i = Math.sqrt(Math.pow(triangoloRett.altezza, 2) + Math.pow(triangoloRett.base, 2));
console.log(i);
var perimetro = i + triangoloRett.base + triangoloRett.altezza;
console.log(perimetro);
var area = (triangoloRett.base * triangoloRett.altezza) / 2;
console.log(area);
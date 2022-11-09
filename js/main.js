const squareContainer = document.querySelector(".container");
const btnGenerate = document.querySelector(".btn-play");

let totSquares = 100;
console.log(totSquares);

const listSquares = document.querySelectorAll(".squares")
console.log(listSquares);

//numero di celle per riga ,,,, math.radice quadrata di 100 = 10
const nbrRowSquares = Math.sqrt(totSquares);
console.log(nbrRowSquares);

//bottone deve generare la griglia 
btnGenerate.addEventListener("click", function(){
    console.log(this);







})


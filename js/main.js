const squareContainer = document.querySelector(".container");
const btnGenerate = document.querySelector(".btn-play");


//bottone deve generare la griglia 
btnGenerate.addEventListener("click", function(){
    console.log(this);

    for (let i = 1; i <= 100; i++){
        const newSquare = document.createElement("div");
        newSquare.innerHTML = i;
        newSquare.classList.add("squares");

        newSquare.addEventListener("click", function(){
            console.log(this.innerHTML);
            newSquare.classList.add("bgc-square");

        })


        squareContainer.append(newSquare);


    }





})


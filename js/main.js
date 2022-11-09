const squareContainer = document.querySelector(".container");
const btnGenerate = document.querySelector(".btn-play");


//bottone deve generare la griglia 
btnGenerate.addEventListener("click", function(){
    console.log(this);
    squareContainer.innerHTML = "";
    const level = document.getElementById("difficoltà").value;
    if(level === "hard"){
       squareContainer.innerHTML = ""; 

        for (let i = 1; i <= 100; i++){
       
        const newSquare = document.createElement("div");
        newSquare.classList.add("grid-squares");
        newSquare.style.flexBasis = 100 / 10 + "%";
        newSquare.innerHTML = i;
       

        newSquare.addEventListener("click", function(){
            console.log(this.innerHTML);
            newSquare.classList.add("bgc-square");

        })


        squareContainer.append(newSquare);


    }
    } else if (level === "medium") {
        squareContainer.innerHTML = ""; 

        for (let i = 1; i <=81; i++){
       
        const newSquare = document.createElement("div");
        newSquare.classList.add("medium-squares");
        newSquare.style.flexBasis = 81 / 9 + "%";
        newSquare.innerHTML = i;
       

        newSquare.addEventListener("click", function(){
            console.log(this.innerHTML);
            newSquare.classList.add("bgc-square");

        })


        squareContainer.append(newSquare);


    }
    } else if (level === "easy") {
        squareContainer.innerHTML = ""; 

        for (let i = 1; i <=49; i++){
       
        const newSquare = document.createElement("div");
        newSquare.classList.add("easy-squares");
        newSquare.style.flexBasis = 49 / 7 + "%";
        newSquare.innerHTML = i;
       

        newSquare.addEventListener("click", function(){
            console.log(this.innerHTML);
            newSquare.classList.add("bgc-square");

        })


        squareContainer.append(newSquare);


    }
    }
    
    


})


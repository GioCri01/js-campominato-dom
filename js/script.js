/*
**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
**Consigli del giorno:** :party_wizard:
**** Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
**** Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
*/


const container = document.querySelector("main");
document.getElementById("play").addEventListener("click", play);

const N_BOMBS = 16;

let arrBombe = [];









for (let i = 0; i < arrBombe; i++) {
    if(!arrBombe.includes()){
        console.log("ciao");
    }
    
}
 












//FUNCTION

function play() {
    reset();
    const livello = document.getElementById('level').value;
    const arrLivello =[100,81,49];
    const quadratoNumero = arrLivello[livello]
    arrBombe = generatoreBombe(quadratoNumero);
    console.log(arrBombe);
    creaSquare(quadratoNumero);
    
    
    
    
    
   

    

   

    
}

function reset() {

    container.innerHTML = "";
}

//function square:

function creaSquare(quadratoNumero) {
    const quadrato = document.createElement("div");
    quadrato.className = "my_container" ;
    container.append(quadrato);
    
    for (let i = 1; i <= quadratoNumero; i++) {
        const cella = document.createElement("div");
        cella.classList = (" cell square" + quadratoNumero)
        cella.innerHTML = `<span>${i}</span>`
        quadrato.append(cella);
        
       
        cella.addEventListener("click", active);
    }
    
    container.append(quadrato)
       
}


function active() {
    const myNumber = parseInt(this.innerText);

    for (let i = 0; i < arrBombe.length; i++) {
        if(arrBombe.includes(myNumber)){
            this.classList.add("bomb");
        }
        
    }
    console.log(myNumber);
    
    
    
   
    
    
     this.classList.add("active")
       
    
    
}

//function bombs
 function generatoreBombe(quadratoNumero) {
     const bombeGenerate = [];
     while(bombeGenerate.length < N_BOMBS ){
         const randomBomb = getRandomNumber(1 , quadratoNumero)
         if(!bombeGenerate.includes(randomBomb)){
             bombeGenerate.push(randomBomb)
         }
     }

     return bombeGenerate;
     
 }

 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  


  


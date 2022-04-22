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



















//FUNCTION

function play() {
    reset();
    const livello = document.getElementById('level').value;
    const arrLivello =[100,81,49];
    const quadratoNumero = arrLivello[livello]
    
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
        console.log(cella);
        cella.addEventListener("click", active);
    }
    
    container.append(quadrato)
       
}


function active() {
     this.classList.add("active")
       
    
    
}




/* 1.agregar el preventDefault de cada boton */

let botonGenerarCartas = document.querySelector('#generateButton');
let botonOrdenarCartas = document.querySelector('#sortButton');
let numeroDeCartas = document.querySelector('#numeroDeCartas')?.getAttribute('value');
let cardForm = document.querySelector('#cardForm')

botonGenerarCartas.addEventListener('click', (e)=>{

    e.preventDefault()
    
    return console.log(numeroDeCartas)

})
    


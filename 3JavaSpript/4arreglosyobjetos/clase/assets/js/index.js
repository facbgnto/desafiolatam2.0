$( document ).ready(function() {

cantidad = document.querySelector('#cantidad');
color = document.querySelector('#color');
precio = document.querySelector('#precio');

total = document.querySelector('#total');
totalCantidad = document.querySelector('#totalCantidad')
circulo = document.querySelector('#circulo')



var botton = document.getElementById("botton");
botton.onclick = btnactivo();
    console.log( "ready!" );
$('#botton').click(function(){
        alert(this.id);
    });

});


function btnactivo(){
    total.innerHTML = Number(cantidad.value) * Number(precio.innerHTML);
    console.log(precio.innerHTML);
    console.log(cantidad.value);
    totalCantidad.innerHTML = cantidad.value;  
    console.log(color.value);
    circulo.style.backgroundColor = color.value;
}

function verification(){
    let sticker1 = document.querySelector('#s1').value
    let sticker2 = document.querySelector('#s2').value
    let sticker3 = document.querySelector('#s3').value
    let result = document.querySelector('.result')
    let total = parseInt(sticker1)+ parseInt(sticker2)+ parseInt(sticker3)
    if ( total > 10){
        result.innerHTML = "Llevas demasiados stickers.";
    } else {
        result.innerHTML = "Llevas"+ " " + total + " "+" stickers.";

    }
    console.log(total)
}

function passverificar(){
    let num1 = document.querySelector('#num-1').value
    let num2 = document.querySelector('#num-2').value
    let num3 = document.querySelector('#num-3').value
    let total = num1 + num2 + num3
    let resultado = document.querySelector('#resultado')

    if (total === "911"){
        resultado.innerHTML = "Password 1 correcto"
    } else if(total === "714") {
        resultado.innerHTML = "Password 2 correcto"
    } else {
            resultado.innerHTML = "Password Incorrecto! "
            }
}
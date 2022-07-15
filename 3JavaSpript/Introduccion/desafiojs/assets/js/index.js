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
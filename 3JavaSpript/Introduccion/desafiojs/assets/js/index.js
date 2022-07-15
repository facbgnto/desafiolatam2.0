cantidad = document.querySelector('#cantidad');
color = document.querySelector('#color');
precio = document.querySelector('#precio');

total = document.querySelector('#total');
totalCantidad = document.querySelector('#totalCantidad')


function btnactivo(){
    total.innerHTML = Number(cantidad.value) * Number(precio.innerHTML);
    console.log(precio.innerHTML);
    console.log(cantidad.value);
    totalCantidad.innerHTML = cantidad.value;  
}
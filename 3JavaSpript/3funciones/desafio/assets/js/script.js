let color = "";
pintar();
function pintar(color = 'green'){
            ele1 = document.getElementById("ele4");
            ele1.style.backgroundColor = color;
}

function pintarCuadrado(idCuadrado){
     cuadrado = document.getElementById(idCuadrado);
     cuadrado.style.backgroundColor = color;

}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = '#00F75A';
        circulo = document.getElementById('circulo_div');
        circulo.style.backgroundColor = color;
    }
    if (event.key === 's') {
        color =  '#F87474';
        circulo = document.getElementById('circulo_div');
        circulo.style.backgroundColor = color;
    }
    if (event.key === 'd') {
        color = '#D4F874'
        circulo = document.getElementById('circulo_div');
        circulo.style.backgroundColor = '#D4F874';
    }
  
    })


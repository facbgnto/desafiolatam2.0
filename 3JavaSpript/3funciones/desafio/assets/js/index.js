function pintar_rojo(color){
body = document.querySelector('body');
body.style.backgroundColor = color;

}

function pintar_amarillo(){
    bodypintar = document.querySelector('body');
    body.style.backgroundColor = 'yellow';
}

function pintar_border(id, color){
    imagen = document.querySelector('#' + id);
    imagen.style.border = "10px dashed " + color;
}

function suma(a,b){
    return a+b
}

function getbkgColor(selector){
    ele = document.querySelector(selector)
    return ele.style.backgroundColor
}

function getValue(selector, parametro){
    ele = Number(document.querySelector(selector).value)

    if(ele > parametro){
        return "muy poco"
    }
    if(ele === parametro){
        return "exacto"
    }
    if(ele < parametro){
        return "mucho"
    }
   

}

function pintar(color = 'green'){
        ele = document.getElementById("ele1");
        console.log(color);
        ele.style.backgroundColor = color;
        ele = document.getElementById("ele1");
        ele.addEventListener("click", pintar(ele));
    }
     
document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
            color = document.getElementById('green_div');
            color.style.backgroundColor = '#00F75A';
        } 
        if (event.key === 's') {
            color = document.getElementById('blue_div');
            color.style.backgroundColor = '#F87474';
        } 
        if (event.key === 'd') {
            color = document.getElementById('yellow_div');
            color.style.backgroundColor = '#D4F874';
        } 
        if (event.key === 'f') {
            color = document.getElementById('pulple_div');
            color.style.backgroundColor = '#DE74F8';
        }
        })
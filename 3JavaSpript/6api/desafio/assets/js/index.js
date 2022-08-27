async function conexionApi(currency) {
    try {
        const newLocal = "https://mindicador.cl/api/";
        const res = await fetch(newLocal + currency);
        const data = await res.json();
        return data;
    } catch (e) {
    alert("NO se logra conectar a la a mindicador.cl");
    }
}


let btn_search = document.querySelector("#btn_buscar");
let result = document.querySelector('#resultado');




btn_search.addEventListener("click", async ()  =>  {
    const clpMonto = parseFloat(document.querySelector("#clpMonto").value);
    const currency = document.querySelector("#selector_moneda").value;

    let resultado = await conexionApi(currency);
    let valorMoneda = parseFloat(resultado.serie[0].valor);
    let calculo = clpMonto/valorMoneda;
    calculo = calculo.toFixed(2);

    console.log(currency)
    let signo = "";
    if(currency == "euro"){
        result.innerHTML = 'Resultado: € ' + calculo + " Euro";
    }else {
        result.innerHTML = 'Resultado: $' + calculo +' ' + currency;
    }
   



    var xmlhttp = new XMLHttpRequest();
    var url = "https://mindicador.cl/api/" + currency;
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        let data = [];
        for(var i=0; i < 10; i++){
            data[i] = resultado.serie[i];
          }
          
         console.log(data)
            date = data.map(function(elem){
                return elem.fecha;
            })
            valorDia = data.map(function(elem){
                return elem.valor;
            })

            const ctx = document.getElementById('grafica').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                        label: currency,
                        data: valorDia,
                        backgroundColor: "#fff"

                    }]
                },
                options: {
                    scales: {
                        xAxes: [

                            {
                              // aqui controlas la cantidad de elementos en el eje horizontal con autoSkip
                                 ticks: {
                       
                                    stepSize: 10,
                                   
                                }
                            }
                          ],
                        y: {

                            beginAtZero: true
                        }
                    }
                }
            });
        }

    }
})

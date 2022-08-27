const newTarea = document.querySelector('#newTarea');
const btnTarea = document.querySelector('#btnTarea');
const total = document.querySelector('#total');
const check = document.querySelector('#check');
const lista = document.querySelector('#lista');
const borrar = document.querySelector('#borrar');
const checkEstado = 'fa-check-circle';
const uncheckEstado = 'fa-circle' 
let tareas = [
     { id: 1, nombre: "Crear Elemento",completado: false },
     { id: 2, nombre: "Borrar Elemento",completado: false },
     { id: 3, nombre: "Actualizar Elemento",completado: false }
];

 tareas.forEach(x => renderTarea());

function renderTarea(){
    let html = "";
    for (let tarea of tareas){
   
        const completado = tarea.completado ?checkEstado : uncheckEstado;
     
        html += `<li id="elemento">
        <p id="idTarea">${tarea.id}</p>
        <p class="text">  ${tarea.nombre}</p>
        <i class="far ${completado} co" data="realizado" id="borrar" onclick="checkTarea(${tarea.id});"></i>
        <i class="fas fa-trash de " data="eliminado" onclick="borrarTarea(${tarea.id});" id="0"></i> 
        </li> `
    }
    const contarRealizadas = tareas.filter((tareas) => tareas.completado === true);
 

    check.innerHTML = contarRealizadas.length;
    lista.innerHTML = html;
    total.innerHTML = tareas.length;
}

btnTarea.addEventListener('click', async () =>{

    if(newTarea.value === ""){
      
        var notification = alertify.notify('El Campo no puede quedar en Blanco', 'success', 5, function(){  console.log('dismissed'); });

    }else{
        console.log(newTarea.value )

            const tarea = newTarea.value;
            let idcontar = ""; 
            if(tareas.length === 0){ 
                idcontar = 1; 
            }else{
                idcontar = (tareas[tareas.length-1].id)+1; 
            }
            

            console.log(idcontar);
            console.log(tareas)

            tareas.push({
                id: idcontar,
                nombre: tarea, 
                completado: false
            });

            newTarea.value = '';    

            renderTarea();
        }
})

function borrarTarea(id){
    const index = tareas.findIndex(tareas => tareas.id  == id);
    tareas.splice(index,1);
    console.log(tareas)
    renderTarea();
    
}

function checkTarea(id){
    const index = tareas.findIndex(tareas => tareas.id  == id);
    if(tareas[index].completado == false ){
        tareas[index].completado = true;
    }else{
        tareas[index].completado = false;
    }
    renderTarea();
}


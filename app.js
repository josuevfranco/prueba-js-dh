/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/


const tareas = require('./tareas')
const fs = require('fs');


exports.leerTareas = function () {
    const listado = fs.readFileSync(this.path, 'utf-8')
    return JSON.parse(listado);    
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
}
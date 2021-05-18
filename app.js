/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs');
const path = './tareas.json';

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */

    const listado = fs.readFileSync('tareas.json', 'utf-8');
    const tareas = JSON.parse(listado);

    return tareas;
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    const tareas = JSON.parse(fs.readFileSync('./tareas.json'));
    fs.writeFileSync(path, JSON.stringify([...tareas, tarea]));
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */

    const tareas = JSON.parse(fs.readFileSync('./tareas.json'));
    return tareas.filter(e => e.status === estado);
}
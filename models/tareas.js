
/**
 * _listado: 
 *          {  'uuid-3123123-3123123' : {id:12,desc:asdasd,completadoEN: 3123123} }, 
 * 
 */

const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    //Metodos 
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea; //Se graba la tarea mediante el id
    }

    

}



module.exports = Tareas;

/**
 * _listado: 
 *          {  'uuid-3123123-3123123' : {id:12,desc:asdasd,completadoEN: 3123123} }, 
 * 
 */
require('colors');
const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];

        //Arreglo de las llaves
        Object.keys(this._listado).forEach(key => {
            //console.log(key);
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }


    constructor() {
        this._listado = {};
    }

    //Metodos 
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea; //Se graba la tarea mediante el id
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    //Tarea
    /**
     * Se le da forma a la presentacion de los datos por consola
     */
    listadoCompleto() {
        console.log(); //Salto de linea

        //Mi forma
        /*const data = this.listadoArr;
        let estado = '';

        for (let i = 0; i < data.length; i++) {
            if (data[i].completadoEn !== null) {
                estado = 'Completada'.green;
            } else {
                estado = 'Pendiente'.red;
            }
            let contAux = `${i + 1}.`.green;
            console.log(`${contAux} ${data[i].desc} :: ${estado}`);
        }*/

        //Forma del profesor optimizada -> Recorre por default todo el arreglo, no es necesario indicarlo como en mi code
        this.listadoArr.forEach((tarea, i) => {
            const contAux = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;

            console.log(`${contAux} ${desc} :: ${estado}`);
        });
    }


    /**
     * true -> presenta las tareas completadas
     * false -> presenta las tareas pendientes
     */
    listarPendientesCompletadas(completadas = true) {
        console.log();

        let contAux = 0;
        this.listadoArr.forEach((tarea) => {
            const { desc, completadoEn } = tarea;

            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;

            if (completadas) {
                //Mostrar completadas
                if (completadoEn) {
                    contAux += 1;
                    console.log(`${(contAux + '.').green} ${desc} :: ${estado}`);
                }
            } else {
                //Mostrar pendientes
                if (!completadoEn) {
                    contAux += 1;
                    console.log(`${(contAux + '.').green} ${desc} :: ${estado}`);
                }
            }
        });
    }


    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }



}



module.exports = Tareas;
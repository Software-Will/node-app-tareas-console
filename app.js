require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer'); //Inquirer permite manipular la consola con las teclas flecha
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
//const { mostarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

    let op = '';
    const tareas = new Tareas(); //Instancia de objeto

    const tareasDB = leerDB();

    if (tareasDB) { // Cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        op = await inquirerMenu(); // Regresa una promesa
        //console.log({ op });

        switch (op) {
            case '1': // Crear tarea
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2': // Listado de todas las tareas
                tareas.listadoCompleto();
                //console.log(tareas.listadoArr);
                break;
            case '3': // Listar tareas completas
                console.log('Completa');
                tareas.listarPendientesCompletadas(true);
                break;
            case '4': // Listar tareas pendientes
                console.log('Pendiente');
                tareas.listarPendientesCompletadas(false);
                break;
            case '5': // Completar tareas
                break;
            case '6': // Borrar tareas
                break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();
        //if (op !== '0') await pausa(); //Si es 0 termina el programa
    } while (op !== '0');
}



main();











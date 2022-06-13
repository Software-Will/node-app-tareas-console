require('colors');
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
    console.log('Hola Mundo');

    let op = "";
    const tareas = new Tareas(); //Instancia de objeto

    do {
        op = await inquirerMenu(); //Regresa una promesa
        //console.log({ op });

        switch (op) {
            case '1': //Crear tarea
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2': //Listado
                console.log(tareas._listado);
                break;
        }

        await pausa();
        //if (op !== '0') await pausa(); //Si es 0 termina el programa
    } while (op !== '0');
}



main();











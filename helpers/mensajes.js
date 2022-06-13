require('colors');
const { resolve } = require('path');
const readLine = require('readline'); //Modulo de node para obtener datos mediante consola

const mostarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('------------------------------'.green);
        console.log('    Seleccione una opción'.green);
        console.log('------------------------------\n'.green);

        console.log(`${'1.'.green} Crear una tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar una tarea`);
        console.log(`${'0.'.green} Salir\n`);

        //Obtenemos datos
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Seleccione una opcion: ', (op) => {
            //console.log({ op });
            rl.close(); //Cuando terminamos de obtener los datos cerramos nuestra peticion y el programa continua
            resolve(op);
        });
    });
}


//Funcion para detener nuestra aplicacion cuando 
const pausa = () => {
    return new Promise(resolve => {
        //Obtenemos datos
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`\nPresione ${'ENTER'.green} para continuar\n`, (op) => {
            rl.close(); //Cuando terminamos de obtener los datos cerramos nuestra peticion y el programa continua
            resolve();
        });
    });
}



module.exports = {
    mostarMenu,
    pausa
}








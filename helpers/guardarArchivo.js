const fs = require('fs');

const archivo = './db/data.json';


const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' }); //encoding: evitamos que nos lo devuelva en bytecode
    const data = JSON.parse(info); //Lo pasamos de string a objeto json

    //console.log(data);

    return data;
}



module.exports = {
    guardarDB,
    leerDB
}









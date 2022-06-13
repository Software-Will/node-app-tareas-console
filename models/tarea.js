const { v4: uuidv4 } = require('uuid'); //uuid permite crear id's unicos a nivel global

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }

}


module.exports = Tarea;
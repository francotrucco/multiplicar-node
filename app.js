const {argv} = require("./configs/yargs");
const colors = require("colors");
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
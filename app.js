const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {

    case 'listar':
        listarTabla(argv.base || argv.b, argv.limite || argv.l);
    break;
    case 'crear':
        crearArchivo(argv.base || argv.b, argv.limite || argv.l)
            .then(archivo => console.log(`Archivo creado`, colors.green( archivo )))
            .catch(err => console.log('Algo salió mal:', err));
    break;
    default:
        console.log('Comando no reconocido.')
    break;
}

// console.log(process);
// console.log(process.argv);
// let argv = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];
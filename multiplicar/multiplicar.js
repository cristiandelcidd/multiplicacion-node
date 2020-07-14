// requireds
// const fs = require('express'); // Expansión de node
// const fs = require('./fs'); // Se refiere a la solicitud de archivos dentro de nuestros proyectos
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('============='.green);
        
    for(let i = 1; i <= limite; i++) {
        let resultado = base * i;
        console.log(`${base} * ${i} = ${resultado}`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise( (resolve, reject) => {

        if( !Number(base)) {
            reject(`El valor introducido ${base}, no es un número.`);
            return;
        }


        let data = '';

        for(let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += (`${base} * ${i} = ${resultado}\n`);
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
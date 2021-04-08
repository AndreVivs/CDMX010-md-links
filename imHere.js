// module.exports = () => {
  // ...
// };

// implementing modules
const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const { error, Console } = require('console');

let route = argv.route;
let ext = path.extname(route);
let pathRelative = path.resolve(route);

const recursiveSummation = (num) => {
    if (num === 0) {
      return 0;
    }
    return num + recursiveSummation(num -1);
};
f(5)
5 + f(5 -1)
5 + (4 + f(4 -1))
5 + (4 + (3 + f(3 -1)))
5 + (4 + (3 + f(3 -1)))...f(0) === 0
/**
 * num =0 goal = 5
 * 0 !== 5 /
 * return 0 + f(0 + 1,5) Waiting
 * f(1,5)
 * 1 !== 5 /
 * return 1 + f(1 + 1,5)
 */

console.log(0,5);
// Hola hola hola, no estoy segura si son ramas independientes.

let searchingMdFiles = (path) => {
let mdFiles =[];
if (fs.statSync(path).isDirectory()){
  //const pathsAbsolutes = path.join(pathRelative, path)
  // path en lugar de route
  let filesDir = fs.readdir( route , 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  });
  mdFiles.push.apply(mdFiles,["x","z","m"])
  console.log(filesDir);
 searchingMdFiles(path);
  //let pathsDirectory = [];
// Recorrer el directorio y extraer paths (.filter)
// LLamar serarchingMdFile para entrar a cada path.
// crear una variable para guardar los archivos que 
//se estan obteniendo de la invocacion
} else {
  
} 
if(ext === '.md'){
  console.log(route);
  const type = typeof(route);
  console.log(type)
  mdFiles.push(route);
  console.log(mdFiles);
  // return myFile
};

// Esta llave no se toca!!!
}
// confirmar si es md
// si es md agregar a nuestro array (.push)

searchingMdFiles(route);

/*
// Read the content of a file
const readingFile = () => {
    fs.readFile( route , 'utf-8', (err, data) => {
      if(err) {
        console.log('error: ', err, 'No se encontró el archivo deseado');
      } else {
        console.log(data);
      }
    });
  }
console.log('contenido del archivo', readingFile());


// Read the content of a directory
const readDir = () =>{
  fs.readdir( route , 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err, 'Algo salio mal');
    } else {
      console.log(data);
    }
  });
}
console.log(readDir());

console.log('esta es el path', route);
console.log('esta es la extension', ext);


function enterToTheFile(path, extencion, ){
  if(extencion !== .md){
    console.log('Tu archivo no tiene extencion .md')
  }else{
    return // Entrega de archivos
  }
}


// readdir reads the content of a directory
//fs.readdir('C:\Users\HP-12\Documents\Bootcamp CDMX010\CDMX010-md-links\ArchivosMD', (error, files) => {
  //console.log(files);
}); */


// --------------------!

let searchingMdFiles = (path) => {
  let mdFiles =[];
  if ( fs.statSync(path).isDirectory() ){
      // Read the content of a directory
      fs.readdir( path , 'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err, 'Algo salio mal');
        } else {
          let gettingDirectoryPaths = [].push(data);
          console.log(gettingDirectoryPaths);
        }
      });
    // Recorrer el directorio y extraer paths (.filter)
    // LLamar serarchingMdFile para entrar a cada path.
    // crear una variable para guardar los archivos que 
    //se estan obteniendo de la invocacion
    //else{
      // confirmar si es md
      // si es md agregar a nuestro array (.push)
      //}
    return mdFiles
  }
}




const fs = require('fs');
const path = require('path');
// const colors = require('colors');
const argv = require('yargs').argv;
const { error } = require('console');

let direction = argv.direction;
let ext = path.extname(direction);

console.log('esta es el path', direction);
console.log('esta es la extension', path.extname(direction));

const join = './C:/Users/HP-12/Documents/BootcampCDMX010/CDMX010-md-links/ArchivosMD';
// const joinFile = file;

// readFile reads the content of a file
const readingFile = (file) => {
    fs.readFile( `${path.join(join,file)}` , 'utf-8', (err, data) => {
      if(err) {
        console.log('error: ', err, 'No se encontró el archivo deseado');
      } else {
        console.log(data);
      }
    });
  }
console.log('contenido del archivo', readingFile());


// Reading directories
const readDir = () =>{
  fs.readdir( './ArchivosMD' , 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err, 'Algo salio mal');
    } else {
      console.log(data);
      data.forEach((file)=>{
        readingFile(file);
      })
    }
  });
}

return readDir();
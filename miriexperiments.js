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
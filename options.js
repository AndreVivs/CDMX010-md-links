console.log(process.argv);
const argv = require('yargs').argv;
console.log(argv);

// --validate. El modulo debe hacer una peticion HTTP
// para averiguar si el link funciona o no (ok 200 / fail 404

if( argv.validate === 'Andy') {
  let x = { 'nombre': 'jaime' }
  let y = { 'apodo': 'MitoCode' }
  let z = [
    { nombre: 'jaime', apellido:'medina', edad: 26 },
    { nombre: 'Mito', apellido:'Code', edad: 26 }
  ] 
}else{
  console.log('usuario no valido')
}

// --stats Texto con estadisticas basicas sobre los links (total, unique)

if( argv.stats === 'Andy') {
  let x = { 'nombre': 'jaime' }
  let y = { 'apodo': 'MitoCode' }
  let z = [
    { nombre: 'jaime', apellido:'medina', edad: 26 },
    { nombre: 'Mito', apellido:'Code', edad: 26 }
  ] 
}else{
  console.log('usuario no valido')
}

// --stats y --validate Obtener resultados de la validacion (total, unique, broken)

if( argv.stats && argv.validate) {
  let x = { 'nombre': 'jaime' }
  let y = { 'apodo': 'MitoCode' }
  let z = [
    { nombre: 'jaime', apellido:'medina', edad: 26 },
    { nombre: 'Mito', apellido:'Code', edad: 26 }
  ] 
}else{
  console.log('usuario no valido')
}
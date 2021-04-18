// implementing modules
const fs = require('fs');
const pathRq = require('path');
const argv = require('yargs').argv;
let route = argv.route; //'ArchivosMd';
const fetch = require('node-fetch');
// variables for get final path
let getDirection = pathRq.parse(__filename);
let userDirection = getDirection.dir;

// //Construyendo el controlador
// const mdlinks = (option) =>{
//     switch(option){
//         case '--validate' || '-v':
//             console.log('yo ando validando ggg');
//             break;
//         case option === '--stats' || '-s':
//             console.log('sacando tus estadisticas ando you you you');
//             break;
//         case option === '--validate' || '-v' && '--stats' || '-s':
//             console.log('validando y estateando ');
//             break;
//         default:
//             console.log('entregando links');
//             break;
//     }
// }
// mdlinks(option);

// Searching .md files
let searchingMdFiles = (route) => {
    let mdFiles = [];
    if(fs.statSync(route).isDirectory()) {
        const filesArray = fs.readdirSync(route, 'utf-8')
        filesArray.forEach( docOrDir => {
            let newRoute = pathRq.resolve(route, docOrDir)
            if (fs.statSync(newRoute).isDirectory()) {
                searchingMdFiles(newRoute);
            }
            if (docOrDir.split('.').pop() === 'md') {
                mdFiles = mdFiles.concat(docOrDir);
            }
        })
    }
    return mdFiles
}
let totalMdFiles = searchingMdFiles(route);
console.log('yo soy total', totalMdFiles);

// Obtaining finall path
// const getLinks = (userDirection, route, file) =>{
//         let newPath = pathRq.join(userDirection, route, file);
//         const links = fs.readFileSync(newPath,'utf-8').match(/https?:\/\/[a-zA-Z\.\/-]+/gm);
//         return links
// }

// //Validating links
// let validatingLinks = (links, file) => {
//     console.log(file);
//     let hrefTxtFile;
//     // Solo ejecutar si el usuario ingreso la opcion --validate sino retornar solo 
//         links.forEach( links => {
//             fetch(links)
//                 .then(result => {
//                     hrefTxtFile = {
//                         href: result.url,
//                         text: result.statusText,
//                         status: result.status,
//                         file: file,
//                     };
//                     console.log(hrefTxtFile);
//             })
//             .catch( (error) => (console.error(error)));
//         })
//         return hrefTxtFile
// };
// const linksValidated = ValidatingLinks(links,file);
// console.log(linksValidated);

// // Read directory
// let readDirectory = (path)=> {
//     let links = [];
//     if(fs.statSync(path).isDirectory()) {
//         const files = fs.readdirSync(route, 'utf-8')
//         files.forEach( file => {
//             const obtainingLinks = getLinks(userDirection, route, file);
//             links = links.concat(obtainingLinks);
//         })
//     }
//     return links
// };

// const finalLinksArray = readDirectory(route);
// console.log(finalLinksArray);
// validatingLinks(finalLinksArray);

//  // Stats Links --stats
//  const linkStatus = (links) => {
//     console.log('linkStatus', links);
//     links = links.concat(obtainingLinks);
//     if(links.lenght <= 0){
//         // Usar un .lenght para sacar el numero
//         // de elementos dentro de un arreglo
//         let totalLinks = links.lenght;
//         console.log('Total: ', totalLinks)
//     }
//     if(links !== links){
//         // usar filter.lenght para sacar los links que esten repetidos
//         // y posteriormente obtener la longitud del arreglo para imprimirlo
//         let uniqueLinks = ++
//     }
//     if(result.status <= 400){
//         // Crear un nuevo arreglo para imprimir la longitud de los links que son <= a 400
//         let brokenLinks;
//     }
// }
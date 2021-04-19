// implementing modules
const fs = require('fs');
const pathRq = require('path');
let argv = require('yargs').argv;
let route = argv.route;
const fetch = require('node-fetch');
// variables for get final path
let getDirection = pathRq.parse(__filename);
let userDirection = getDirection.dir;

//Controlador
// const mdlinks = () =>{
//     if(argv.validate === true && argv.stats === true){
//         console.log('VALIDACION Y ESTADISTICA', argv.validate, argv.stats);
//     } else if (argv.v === true && argv.s === true){
//         console.log('VALIDACION Y ESTADISTICAs 2', argv.v, argv.s);
//     }else if (argv.validate === true || argv.v === true){
//         console.log('VALIDACION', argv.validate);
//     } else if (argv.stats === true || argv.s === true){
//         console.log('ESTADISTICAS');
//     } else 
//     console.log('LINKS', searchingMdFiles(route));
// }
// mdlinks();

//Validating links
let validatingLinks = (links, newRoute) => {
    console.log(newRoute);
    let = hrefTxtFile;
    // Solo ejecutar si el usuario ingreso la opcion --validate sino retornar links
        links.forEach( links => {
            fetch(links)
                .then(result => {
                    hrefTxtFile = {
                        href: result.url,
                        text: result.statusText,
                        status: result.status,
                        file: file,
                    };
                    console.log(hrefTxtFile);
            })
            .catch( (error) => (console.error(error)));
        })
        return hrefTxtFile
};

const getLinks = (newRoute) =>{
        const links = fs.readFileSync(newRoute,'utf-8').match(/https?:\/\/[a-zA-Z\.\/-]+/gm);
        console.log(links);
        validatingLinks(links, newRoute)
        return links
}

let pathFiles = (route, filesArray) => {
    let pathsFiles = [];
    filesArray.forEach( file => {
        const newPaths = pathRq.resolve(route, file)
        pathsFiles.push(newPaths)
    })
    return pathsFiles
}

let getDirectoryFiles = (route) =>{
    const filesArray = fs.readdirSync(route, 'utf-8')
            let newRoute = pathFiles(route, filesArray)
            newRoute.forEach(route => {
                if (fs.statSync(route).isDirectory()) {
                    console.log('soy Route', route);
                    getDirectoryFiles(route);
                } else if (fs.statSync(route).isFile()){
                    searchingMdFiles(route);
                }
            })
}

// SearchingLinksfiles
const searchingMdFiles = (route) => {
    let mdFiles = [];
    if(fs.statSync(route).isDirectory()) {
        getDirectoryFiles(route);
    } else if (pathRq.extname(route) === '.md') {
        getLinks(route)
    }

    return mdFiles
}

searchingMdFiles(route);
// console.log('totalMdFiles', totalMdFiles);



//const linksValidated = validatingLinks(links,newRoute);
//console.log(linksValidated);

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
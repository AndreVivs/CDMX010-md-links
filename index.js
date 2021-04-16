// implementing modules
const fs = require('fs');
const pathRq = require('path');
const argv = require('yargs').argv;
let route = 'ArchivosMd'; // argv.route
const fetch = require('node-fetch');
// variables for get final path
let getDirection = pathRq.parse(__filename);
let userDirection = getDirection.dir;

/*
// Searching .md files
let searchingMdFiles = (path) => {
    let mdFiles = [];
    if(fs.statSync(path).isDirectory()) {
        fs.readdir(route, 'utf-8', (err, data) => {
            if(err){
                console.log('Error: ', err);
            } else {
                data.forEach( docOrDir => {
                    if (fs.statSync(docOrDir).isDirectory()) {
                        searchingMdFiles(route);
                    } else {
                        if (pathRq.resolve(docOrDir) === '.md'){
                          return mdFiles.push.apply(mdFiles, [docOrDir]);
                        }
                        
                    }
                })
            }
        })
    }
    return mdFiles
}

console.log(searchingMdFiles(route)); 
--------------------------------------------------------------------------------------*/

// Obtaining finall path
const getLinks = (userDirection, route, file) =>{
        let newPath = pathRq.join(userDirection, route, file);
        const links = fs.readFileSync(newPath,'utf-8').match(/https?:\/\/[a-zA-Z\.\/-]+/gm);
        return links
}

//Validating links
let ValidatingLinks = (links, file) => {
    console.log(file);
    let hrefTxtFile;
    // Solo ejecutar si el usuario ingreso la opcion --validate sino retornar solo 
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
// const linksValidated = ValidatingLinks(links,file);
// console.log(linksValidated); 

// Read directory
let readDirectory = (path)=> {
    let links = [];
    if(fs.statSync(path).isDirectory()) {
        const files = fs.readdirSync(route, 'utf-8')
        files.forEach( file => {
            const obtainingLinks = getLinks(userDirection, route, file);
            links = links.concat(obtainingLinks);
        })
    }
    return links
};

const finalLinksArray = readDirectory(route);
console.log(finalLinksArray);
ValidatingLinks(finalLinksArray);

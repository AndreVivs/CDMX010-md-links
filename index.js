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
        linksValidated(links, newPath)
        // readDirectory(newPath)
        return links
}

//Validating links
let linksValidated = (links, newPath) => {
    // Solo ejecutar si el usuario ingreso la opcion --validate sino retornar solo 
    // return new Promise ( (resolve, reject) => {
        links.forEach( links => {
            fetch(links)
                .then(result => {
                    if(result.status === 200){
                        console.log('href: ', links, '\ntext: ', result.status, '\nfile: ', newPath);
                    } else {
                        console.log('href: ', links, '\ntext: ', result.status, '\nfile: ', newPath);
                    }
            })
            .catch( (error) => (console.error(error)));
        })
    //})
}

// Estadistics Links


// Read directory
let readDirectory = (path, /* newPath */)=> {
    // No esta reconociendo el argumento newPath
    if(fs.statSync(path).isDirectory()) {
        const files = fs.readdirSync(route, 'utf-8')
        files.forEach( file => {
            const links = getLinks(userDirection, route, file);
            console.log(/* newPath, */ links);
        })
    }
};

readDirectory(route);

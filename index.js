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

//Getting status links
let statusLinks = () => {
    // Solo validar cuando el usuario lo pide, sino retornar solamente los links
            // links.forEach(link => {
            //     console.log('link ', link);
            //     fetch(link)
            //     .then(respuesta => respuesta.json())
            //     .then(json = {
            //     console.log(json.validate);
            //     })
            // })
}

// Read directory
let readDirectory = (path)=> {
    if(fs.statSync(path).isDirectory()) {
        const files = fs.readdirSync(route, 'utf-8')
        files.forEach( file => {
            const links = getLinks(userDirection, route, file);
            console.log(links);
        })
    }
};

readDirectory(route);

// implementing modules
const fs = require('fs');
const pathRq = require('path');
const argv = require('yargs').argv;
let route = argv.route;

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

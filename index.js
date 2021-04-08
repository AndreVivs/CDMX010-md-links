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
                        searchingMdFiles(newPath);
                    } else {
                        docOrDir == doc
                        if (pathRq.resolve(docOrDir) !== '.md'){
                            mdFiles.push.apply(mdFiles, [])
                        }
                        return mdFiles.push.apply(mdFiles, [docOrDir]);
                    }
                })
            }
        })
    }
    return mdFiles
}

console.log(searchingMdFiles(route));
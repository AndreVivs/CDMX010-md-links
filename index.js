// implementing modules
const fs = require('fs');
const pathRq = require('path');
const argv = require('yargs').argv;
let route = argv.route;

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
let gettingFinalPath = (userDirection, route, file) =>{
        let newPath = pathRq.join(userDirection, route, file);
        let newPathArray = [];
        newPathArray.push(newPath);
        console.log(newPathArray);
}

// Read directory
let readDirectory = (path)=> {
    if(fs.statSync(path).isDirectory()) {
        fs.readdir(route, 'utf-8', (err, files) => {
            if(err){
                console.log('Error: ', err);
            } else {
                files.forEach( file => {
                    gettingFinalPath(userDirection, route, file);
                })
            } 
        })
    }
};

readDirectory(route);
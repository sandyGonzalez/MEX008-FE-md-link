#!/usr/bin/env node

const readFileMd = require('./modules/readFileMd');
const typeOfFile = require('./modules/getFileMd.js');
const searchLinks = require('./modules/getLinks.js');
const getStats = require('./modules/stats');
const getValidation = require('./modules/validateLinks');


const mdLinks =(pathFile, validate,stats)=>{
  return new Promise((resolve => {
    if(typeOfFile(pathFile)){
      readFileMd(pathFile)
        .then((data) => {
          return searchLinks(data);
        })
        .then(res => {
        if (process.argv[3] == null && process.argv[4] == null){
          console.log(res);
          }
        else if(validate==="validate" && stats === "stats") {
          console.log(`${getValidation(res)}
Total: ${res.length}
Unique: ${getStats(res)}`)
        }
          else if(validate === "validate"){
            console.log(getValidation(res));
          }
          else if(validate === "stats"){
            console.log(`Total: ${res.length}
Unique: ${getStats (res)}`);
          }
          else{
            console.log("error las banderas son validate o stats")
        }
        })

    } else {
      console.log("Archivo no valido");
    }
  }))
};


mdLinks(process.argv[2],process.argv[3],process.argv[4]);
#!/usr/bin/env node

const readFileMd = require('./modules/readFileMd');
const getFileMd = require('./modules/getFile');
const getLinks = require('./modules/getLinks');


const mdLinks =(pathFile,options)=>{
  if(getFileMd(pathFile)){

    readFileMd(pathFile)
      .then((data) =>{
        console.log(getLinks(data));
      });



  }else {
    console.log("El archivo no es markdown");
    return  "Archivo no es markdown";
  }
};


mdLinks(process.argv[2]);

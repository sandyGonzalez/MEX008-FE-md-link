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
    console.log("archivo inválido");
    return  "Archivo inválido";
  }
};


mdLinks(process.argv[2]);

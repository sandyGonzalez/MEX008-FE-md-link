const path = require("path");

 const searchLinks =(typeFile)=> {
  const regex = /\[(.+)\]\((https?.+)\)/gm;
  let match;
  let i = 0;
  let newArray = [];
  while((match = regex.exec(typeFile)) !== null) {
    const newObject = {
      href: match[2],
      text: match[1],
      File:path.resolve()
    };
    i++;
    newArray.push(newObject);
  }
  return newArray;
};

 module.exports = searchLinks;
 
const path = require("path");

const searchLinks = (typeFile) => {
    return new Promise((resolve) => {
      const regex = /\[(.+)\]\((https?.+)\)/gm;
      let match;
      let i = 0;
      let newArray = [];
      while ((match = regex.exec(typeFile)) !== null) {
        const newObject = {
          href: match[2],
          text: match[1],
          File: path.resolve()
        };
        i++;
        newArray.push(newObject);
      }
      resolve(newArray);
    })
  }


    module.exports = searchLinks;

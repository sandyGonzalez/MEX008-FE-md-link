const fs = require ("fs");


const readFileMd = (path) => {

    return new Promise(( resolve, reject) => {
      fs.readFile(path, "utf8", (error, data) => {
        if (error) {
          // console.error(error);
          return reject(error);
        } else {
          resolve(data);
        }
      })
    });
};

module.exports = readFileMd;


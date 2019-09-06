const path = require("path");

const getFileMd = (inputFile) => {
   return path.extname(inputFile) === ".md";
 };

module.exports = getFileMd;

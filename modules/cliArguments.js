//limitando los argumentos que el usuario digite

const cliArguments = (arguments) => {
    if (arguments.length <= 2 || arguments.length > 5) {
        return false;
    }
    return true;
};
module.exports = cliArguments;



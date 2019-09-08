
const readFile = require("../modules/readFileMd.js");

test("it should be a function", () => {
    expect(typeof readFile).toBe("function");
});
test ("the data should be a string", () => {
  return readFile("./README.md").then(data => {
    expect(typeof data).toBe("string");
  });
});

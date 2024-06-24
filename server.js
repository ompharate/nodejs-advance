const path = require("path")

const fileName = path.basename("./utils/index.js")
console.log(fileName)

console.log(path.extname("./utils/index.js"))

const path3 = path.join("abc", "", "", "deatils.txt");
console.log(path3)

console.log("Current directory:", __dirname);
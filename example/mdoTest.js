var fs = require("fs");
var M  = require("../mdo");

var text  = fs.readFileSync("test.mdo", "utf8")
var obj = M.parseMdo(text);
console.log("json=%s", JSON.stringify(obj, null, 2));
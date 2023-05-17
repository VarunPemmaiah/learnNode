const fs = require("fs");

fs.appendFile("file.txt", "Hello A H !", function (err) {
  if (err) throw err;
  console.log("Done !");
});

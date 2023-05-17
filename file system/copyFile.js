const fs = require("fs");

fs.copyFile("file.txt", "fileCopy.txt", function (err) {
  if (err) throw err;

  console.log("Done !");
});

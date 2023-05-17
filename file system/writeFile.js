const fs = require("fs");

fs.writeFile(
  "file.txt",
  "The content added here gets added in the file as a fresh text.",
  function (err) {
    if (err) throw err;

    console.log("content of the file is updated.");
  }
);

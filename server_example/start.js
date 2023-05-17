const nodemon = require("nodemon");

nodemon({ script: "index.js" })
  .on("start", console.clear)
  .on("restart", console.clear)
  .on("exit", () => {
    console.log("App has quit");
    process.exit();
  });

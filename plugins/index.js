const fs = require("fs");

module.exports = (on, config) => {
  on("task", {
    ensureDirectoryExists(dir) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      return null;
    },
  });
};

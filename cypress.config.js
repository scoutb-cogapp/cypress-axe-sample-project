const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        ensureDirectoryExists(dir) {
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          return null;
        },
      });
    },
  },
});

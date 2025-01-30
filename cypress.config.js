const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gvs1pt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

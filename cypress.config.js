const { defineConfig } = require("cypress");

module.exports = {
  projectId: "2xz3d2",
  // ...rest of the Cypress project config

  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    //retries: 2,
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
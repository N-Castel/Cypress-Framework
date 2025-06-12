const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report',
    reportDir: 'cypress/reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      try {
        require('cypress-mochawesome-reporter/plugin')(on);
      } catch (err) {
        console.error('Error en setupNodeEvents:', err);
      }
      return config;
    }
  }
})

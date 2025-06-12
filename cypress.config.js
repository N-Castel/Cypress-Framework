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
      on('after:run', (results) => {
        if (results) {
          // results will be undefined in interactive mode
          console.log(
            results.totalPassed,
            'out of',
            results.totalTests,
            'passed'
          )
        }
      })
    },
  },
})

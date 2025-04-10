const testData = require('../../fixtures/titles.json')

testData.forEach((testData) => {
    describe('Validate correct title per page', () => {

        it('Validate that ' +testData.title+ ' is the correct title for '+testData.location +'', () => {
            cy.visit(testData.location);
            cy.title().should('include', testData.title)
        })
    })
})
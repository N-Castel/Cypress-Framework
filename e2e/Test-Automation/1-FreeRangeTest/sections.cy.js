import sectionFixture from "../../../fixtures/1-freeRangeFixture/titles.json"


sectionFixture.forEach(sectionFixture => {
    describe('Validate correct title per page', () => {

        it('Validate that ' + sectionFixture.title + ' is the correct title for '+ sectionFixture.location +'', () => {
            cy.visit(sectionFixture.location)
            cy.title().should('include', sectionFixture.title)
        })
    })
})

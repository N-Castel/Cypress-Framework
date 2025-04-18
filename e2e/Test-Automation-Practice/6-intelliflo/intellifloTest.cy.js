import baseNioPage from "../../../pages/6-intelliflo/baseIntellifloPage";

const ioFixture = require ("../../../fixtures/6-IOFixture/ioFixture.json")

const baseIOPage = new baseNioPage

describe('Intelliflo Test', () => {

    beforeEach(() => {
        baseIOPage.navigationNIOHome()
    })

    ioFixture.forEach(ioFixture => {

        it('Modify US Language', () => {
            baseIOPage.languageUSHomeDropdown().click({force: true})
            baseIOPage.usLabelHome().should('have.text', ioFixture.usAdvisoryTitle)
        })

        it('Close cookies modal', () => {
            baseIOPage.languageUSHomeDropdown().click({force: true})
            baseIOPage.usLabelHome().should('have.text', ioFixture.usAdvisoryTitle)
            baseIOPage.cookiesModal().click()
        })

        it('Selecting IO Redblack Feature ', () => {
            baseIOPage.languageUSHomeDropdown().click({force: true})
            baseIOPage.usLabelHome().should('have.text', ioFixture.usAdvisoryTitle)
            baseIOPage.cookiesModal().click()
            baseIOPage.redBlackLabel().should('have.text', ioFixture.redblackTitle)
            baseIOPage.redBlackLink().click()
            baseIOPage.closePopUpButton().click()
            baseIOPage.redBlackTittleLabel().should('have.text', ioFixture.redblacklabel)
        })

        it('Select IO managed', () => {
            baseIOPage.languageUSHomeDropdown().click({force: true})
            baseIOPage.usLabelHome().should('have.text', ioFixture.usAdvisoryTitle)
            baseIOPage.cookiesModal().click()
            baseIOPage.redBlackLabel().should('have.text', ioFixture.redblackTitle)
            baseIOPage.redBlackLink().click()
            baseIOPage.closePopUpButton().click()
            baseIOPage.ioManagedLabel().should('have.text', ioFixture.ioManagedTitle)
            baseIOPage.ioManagedLink().click()
        })

        it('', () => {
            baseIOPage.languageUSHomeDropdown().click({force: true})
            baseIOPage.usLabelHome().should('have.text', ioFixture.usAdvisoryTitle)
            baseIOPage.cookiesModal().click()
            baseIOPage.redBlackLabel().should('have.text', ioFixture.redblackTitle)
            baseIOPage.redBlackLink().click()
            baseIOPage.closePopUpButton().click()
            baseIOPage.ioManagedLabel().should('have.text', ioFixture.ioManagedTitle)
            baseIOPage.ioManagedTitle().should('have.text',ioFixture.ioManagedTitleOutsourced)
        })
    })
})

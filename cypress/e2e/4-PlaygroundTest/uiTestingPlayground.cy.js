import selectorUITestingPlayGround from "../../selector/4-basePlayGroundPage/selectorUITestingPlayGround"
import playGroundFixture from "../../fixtures/4-playGroundFixture/playGround.json"

const playGroundPage = new selectorUITestingPlayGround


describe('UI Test Autoation Playground', () => {

    beforeEach(() => {
        playGroundPage.navigationHome()

    })

    playGroundFixture.forEach(playGroundFixture => {

        it('Dynamic ID', () => {
            playGroundPage.dynamicIDHomeButton().should('have.text', playGroundFixture.dynamicIdLabel)
            playGroundPage.dynamicIDHomeButton().click()
            playGroundPage.dynamicHomeTitle().should('have.text', playGroundFixture.dynamicIdLabel)
            playGroundPage.dynamicIdButton().should('have.text', playGroundFixture.dinamycIdButtonLabel)
            playGroundPage.dynamicCSSButton().then(($element) => {

                const value = $element

                playGroundPage.dynamicIdButton().click()
                playGroundPage.dynamicIdButton().should('not.have.text', value)
            })
        })

        it('attribute test', () => {
            playGroundPage.classAttributebutton().click()
            cy.title().should('include', 'Class Attribute')
            cy.get('.btn-primary').click()
            cy.on('window:alert', (alertStr) => {
                expect(alertStr).equal(playGroundFixture.primaryButtonPressedText)
            })
        })

        it('attribute test', () => {
            playGroundPage.classAttributebutton().click()
            cy.title().should('include', 'Class Attribute')
            cy.get('.btn-primary').click()
            cy.on('window:alert', (alertStr) => {
                expect(alertStr).equal(playGroundFixture.primaryButtonPressedText)
            })
        })
    
        it('Hidden Layers', () => {
            playGroundPage.hiddenLayers().click()
            cy.title().should('equal', 'Hidden Layers')
            playGroundPage.greenButton().click()
        })

        it('Load Delay Spinner', () => {
            playGroundPage.spinnerLoader().should('have.css', 'display', 'none')
            playGroundPage.homeBody().contains(playGroundFixture.loadDeladylabel)
                .invoke('removeAttr', 'href')   // remove the href, so page does not change
            playGroundPage.homeBody().contains(playGroundFixture.loadDeladylabel).click() 
            playGroundPage.spinnerLoader().should('be.visible')
        })
    
        it('Load Delay', () => {
            playGroundPage.loadDelayHomeButton().click()
            cy.title().should('equal', playGroundFixture.loadDelaysTtitle)
            playGroundPage.delayButton().click()

        })
        
        it('Ajax Data', () => {
            playGroundPage.ajaxDatabutton().click()
            cy.title().should('be.equal', 'AJAX Data')
            playGroundPage.spinnerLoader().should('have.css', 'display', 'none')
            playGroundPage.ajaxButton()
                .invoke('removeAttr', 'href')   // remove the href, so page does not change
            playGroundPage.ajaxButton().click()
            playGroundPage.spinnerLoader().should('be.visible')
        })

        it('Client Side delay', () => {
            playGroundPage.clientSideDelayButton().click()
            playGroundPage.triggeringClientSideButton().click()
            cy.wait(15000)
            playGroundPage.dataSuccessmessageClientSide().should('contain', playGroundFixture.successMessageClientSide)
        })

        it('Click', () => {
            playGroundPage.clickHomeLabel().click()
            playGroundPage.buttonIgnoresDOM().click()
        })
    })   
})

import selectorAmazon from "../../selector/7-amazonPage/selectorAmazon";
import amazonFixtureData from "../../fixtures/7-amazonFixture/amazonFixture.json"

const amazonFixtureData = require ("../../../fixtures/7-amazonFixture/amazonFixture.json")

const baseAmazon = new selectorAmazon

describe('Amazon Test', () => {

    beforeEach(() => {
        // baseAmazon.navigationHome()
 
        const checkAndReload = () => {
            baseAmazon.changeLocationButton()
              .should('be.visible')
              .invoke('text')
              .then((modalPresent) => {
                if (modalPresent.length <= 0) {
                  cy.log('Did not get the button, so need to refresh')
          
                  return
                }
                cy.wait(500, { log: false })
                cy.reload()
                checkAndReload()
              })
          }
          
          baseAmazon.navigationHome()
          checkAndReload()
    })

    amazonFixtureData.forEach(amazonFixtureData => {

        
        it('modify Location and add product to cart', () => {     
            baseAmazon.changeLocationButton().click()
            baseAmazon.countryDropdownHome().select(amazonFixtureData.turkey, { force: true })
            baseAmazon.doneModifyLocationButton().click()
            cy.log('Select Turkey as country')
            baseAmazon.searchToolbar().as('btn').click()
            baseAmazon.searchToolbar().type(amazonFixtureData.mac)
            baseAmazon.searchToolbar().type('{enter}')
            cy.log('Searching product')
            baseAmazon.acceptCountryDrop().click()
            baseAmazon.tittleResultslabel().should('have.text', '"macbook"')
            baseAmazon.rangeLower().invoke('val', 50).trigger('input', {force: true}) //simula user movió el range
            .should('have.value', '50')
            baseAmazon.rangeUpper().invoke('val', 100).trigger('input', {force: true})
            .should('have.value', '100')
            cy.log('Modify the range')
            baseAmazon.screenSize14InchesCheckbox().click({force: true})
            baseAmazon.screenSize15InchesCheckbox().click({force: true})
            cy.log('Set check filters')
            baseAmazon.intelCPUModelCheckbox().click()
            cy.log('Set CPU Filter')
            baseAmazon.portatilJumperAddCartButton().click()
            cy.log('Select Product')
            baseAmazon.popUpProductAddded().should('have.text', 'Se agregó el producto')
            baseAmazon.cartNav().should('contain', "1" )
            cy.log('Product added to the cart')
        })    
    })
})
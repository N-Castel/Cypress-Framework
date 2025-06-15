import selectorSauceDemo from "../../selector/11-sauceDemo/sauceDemoSelector"
import sauceFixture from "../../fixtures/11-sauceDemo/sauceFixture.json"

const seleSauceDemo = new selectorSauceDemo

describe('SauceDemo login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    sauceFixture.forEach(sauceFixture => {
        it('Success Login', () => {
            seleSauceDemo.userNameInput().type(sauceFixture.username)
            seleSauceDemo.passwordInput().type(sauceFixture.password)
            seleSauceDemo.loginButton().click()

            // if(sauceFixture.title1 === 'ok'){
            //     seleSauceDemo.productsTitle().should('have.text', sauceFixture.span)
            // }else{
            //     seleSauceDemo.errorMessage().should('have.text', sauceFixture.errorMessage)
            // }

            sauceFixture.successLogin == 'ok' ? seleSauceDemo.productsTitle().should('have.text', sauceFixture.span) : seleSauceDemo.errorMessage().should('have.text', sauceFixture.errorMessage)
        })

    })

})

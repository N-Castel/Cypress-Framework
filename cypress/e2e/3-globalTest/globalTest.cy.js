import selectorGlobalBasePage from "../../../selector/3-globalBasePage/selectorGlobalBase";

const globalBase = new selectorGlobalBasePage

describe('Automation test Global Logic', () => {

    it('Shirt purchased flow', () => {
        cy.visit('https://magento.softwaretestingboard.com');
        globalBase.seachInput().click();
        globalBase.seachInput().type('shirt');
        globalBase.seachInput().type('{enter}');
        globalBase.titleAfterSearch().should('have.text', "Search results for: 'shirt'");
        cy.wait(3000);
        globalBase.shirtProduct().click();
        globalBase.sizeProduct().click();
        globalBase.colorProduct().click();
        globalBase.addtoCartButton().click();
        cy.wait(3000);
        globalBase.cartItems().should('contain', '1')
    })
})

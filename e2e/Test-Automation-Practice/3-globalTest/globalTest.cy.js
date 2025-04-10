import globalBasePage from "../../../pages/3-globalBasePage/globalBasePage";

const globalBase = new globalBasePage

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

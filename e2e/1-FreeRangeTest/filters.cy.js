describe('Probando ML', ()=> {
    beforeEach(() => {
        cy.visit('https://www.mercadolibre.com.ar/')
})

    it('Should have a title', () => {
        cy.title().should('include', 'Mercado Libre Argentina');
        cy.get(':nth-child(2) > .nav-menu-item-link').click(); //Looking for a component by css
        cy.contains('Mis compras').click(); // Looking a component by UI text
        cy.xpath('/html/body/header/div/div[5]/div/ul/li[3]/a').click(); //Looking for a component by xpath
        cy.get('nth-child(2) > .nav-menu-item-link:enabled'); // return enabled element
        cy.get('nth-child(2) > .nav-menu-item-link:disabled'); // return disabled element
        cy.get('nth-child(2) > .nav-menu-item-link:checked'); // return elemet checked
        cy.get('nth-child(2) > .nav-menu-item-link:unchecked'); // return elemet unchecked
        cy.get('nth-child(2) > .nav-menu-item-link:empty'); // return elemet without child
        cy.get('nth-child(2) > .nav-menu-item-link:visible'); // return elemet visible in the UI
    })

})

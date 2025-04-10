describe('Probando get', ()=> {
    beforeEach(() => {
        cy.visit('https://www.mercadolibre.com.ar/')
})

    it('Should have a title', () => {
        cy.title().should('include', 'Mercado Libre Argentina');
        cy.get(':nth-child(2) > .nav-menu-item-link').as('Boton Ofertas'); 
        
        // Looking for a component by css / 
        // Always need an action (cant set a get witouh action and use it later) --cy.get(':nth-child(2) > .nav-menu-item-link')-- not a valid statement
    })
})
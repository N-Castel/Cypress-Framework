describe('Test atributes manage', () => {
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    });

// it('Using invoke', () => {
//     cy.contains('Multiple Windows').click();
//     cy.contains('Click Here').invoke('removeAttr', 'target').click(); //Open in the same tab the new view
//     cy.contains('New Window').should('have.text', 'New Window');
// })

    it('validate first and last img', () => {
        cy.contains('Dynamic Content').click();
        cy.get('img').should('be.visible'); // Validate all img are visible in the UI
        cy.get('img').eq(2).should('be.visible'); // Validate the 2nd img is visible in the UI
        cy.get('img').last().should('be.visible'); // Validate the last img is visible in the UI
    })

})
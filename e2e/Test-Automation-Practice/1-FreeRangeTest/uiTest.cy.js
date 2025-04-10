describe('UI test with differents elements', () => {
    beforeEach(() => {
        cy.visit('https://the-internet-herokuapp.com/')
    })

    it('Write in a field', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').debug().type('SuperSecretPassword!');
        cy.get('form').contains('Login').click();
        cy.log('click login button');
        cy.url().should('contain', '/secure');
    });

    it('Checkboxes eg', () => {
        cy.contains('Dropdown').click();
        cy.get('#dropdown').select(1) // index/position of the item or can select by text of the item
    });

    it('Clear text in a field', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('#password').clear() //Clean the text in the field
        cy.log('click login button');
        cy.url().should('contain', '/secure');
    });
    
})
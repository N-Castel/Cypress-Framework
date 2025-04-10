describe('Debuggin', () => {

    // it('login with cy.log', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login');
    //     cy.get('#username').type('tomsmith');
    //     cy.log('Set username');
    //     cy.get('#password').type('SuperSecretPassword!');
    //     cy.log('set password');
    //     cy.get('form').contains('Login').click();
    //     cy.log('click login button');
    //     cy.url().should('contain', '/secure');

    // })

    // it('login with cy.pause', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login');
    //     cy.get('#username').type('tomsmith').pause();
    //     cy.log('Set sername');
    //     cy.get('#password').type('SuperSecretPassword!').pause();
    //     cy.log('set password');
    //     cy.get('form').contains('Login').click();
    //     cy.log('click login button');
    //     cy.url().should('contain', '/secure');

    // })

    it('login with Debbug', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith');
        cy.get('#password').debug().type('SuperSecretPassword!');
        cy.get('form').contains('Login').click();
        cy.log('click login button');
        cy.url().should('contain', '/secure');

    })
})
describe('Fixture', () => {

    before(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.fixture('credentials').then(function (dataCredentials){
           this.dataCredentials = dataCredentials
        });
    })

        it('Login using data from Fixtures', function () {
            // cy.console.log((this.dataCredentials));
            cy.get('#username').type(this.dataCredentials.username);
            cy.get('#password').type(this.dataCredentials.password);
            cy.get('form').contains('Login').click();
            cy.url().should('contain', '/secure')
        });
});

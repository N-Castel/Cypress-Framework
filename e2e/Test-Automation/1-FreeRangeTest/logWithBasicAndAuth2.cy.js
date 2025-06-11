//Already add a new command in commands.js field a use that command here 

describe('Login with Basic Auth and Auth with forms', () => {

    it('Login in form using POST request', () => {
    //Define login in commands 
        cy.login();
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')
    })
})

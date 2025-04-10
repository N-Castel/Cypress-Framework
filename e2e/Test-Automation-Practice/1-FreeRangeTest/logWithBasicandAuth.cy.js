describe('Login with Basic Auth and Auth with forms', () => {

    it('Visit website Without login', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('contains', 'Congratulations')
    });

    it('Login with  auth', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        cy.get('p').should('include.text', 'Congratulations')
    })

    it('logIn with cred in the URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('include.text', 'Congratulations')
    })

    it('Login in form using POST request', () => {
        cy.visit('https://the-internet.herokuapp.com');
        cy.request({
            method: 'POST',
            url: '/authenticate',
            form: true,
            body: {
                username: 'tomsmith',
                password: 'SuperSecretPassword!' 
            }
        })
        cy.getCookie('rack.session').should('exist');
        cy.visit('https://the-internet.herokuapp.com/secure');
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')
    })
})

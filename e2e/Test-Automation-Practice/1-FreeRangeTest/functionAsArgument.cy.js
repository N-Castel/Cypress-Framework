describe('Seting function as argument', () => {
        beforeEach(() =>{
            cy.visit('https://the-internet.herokuapp.com/login')
        });
//Define the action click Login button
    action = () => { 
        cy.get('.fa').click();
    }
//Set the action as argument
    loginTest = (clickLoginButton1) => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        clickLoginButton1()
    }
//Call the function with the argument
    clickLoginButton1(action)
})
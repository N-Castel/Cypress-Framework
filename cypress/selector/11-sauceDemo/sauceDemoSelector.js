class selectorSauceDemo {

    userNameInput(){
        return cy.get('#user-name')
    }

    passwordInput(){
        return cy.get('#password')
    }

    loginButton(){
        return cy.get('#login-button')
    }

    errorMessage(){
        return cy.get('#login_button_container > div > form > div.error-message-container.error > h3')
    }

    productsTitle(){
        return cy.get('[data-test="title"]')
    }
}

export default selectorSauceDemo
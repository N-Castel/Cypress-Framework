class FreeRangeHome {

    navigateHome(){
        cy.visit('https://www.freerangetesters.com/')
    };

    botonMentoria(){
        return cy.get('[data-testid="header-container"] > .sc-duWCru > .sc-cHqXqK > :nth-child(4) > .sc-iuUfFv')
    }

    clickBotonMentoria(){
        this.botonMentoria().click()
    }
}

export default FreeRangeHome

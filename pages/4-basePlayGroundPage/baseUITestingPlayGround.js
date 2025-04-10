class basePlayGroundPage {

    navigationHome(){
        return cy.visit('http://uitestingplayground.com/')
    }

    dynamicIDHomeButton(){
        return cy.get(':nth-child(1) > :nth-child(1) > h3 > a')
    }

    classAttributebutton(){
        return cy.get(':nth-child(1) > :nth-child(2) > h3 > a')
    }

    dynamicHomeTitle(){
        return cy.get('h3')
    }

    dynamicIdButton(){
        return cy.get('.btn.btn-primary')
    }

    dynamicCSSButton(){
        return cy.get('div > button')
    }

    hiddenLayers(){
        return cy.get(':nth-child(1) > :nth-child(3) > h3 ')
    }

    greenButton(){
        return cy.get('#greenButton')
    }

    greenButton1(){
        return cy.get('#blueButton')
    }

    loadDelayHomeButton(){
        return cy.get(':nth-child(1) > :nth-child(4) > h3 > a')
    }

    delayButton(){
        return cy.get('.btn')
    }

    ajaxDatabutton(){
        return cy.get(':nth-child(2) > :nth-child(1) > h3 > a')
    }

    ajaxButton(){
        return cy.get('#ajaxButton')
    }

    spinnerLoader(){
        return cy.get('#spinner')
    }

    homeBody(){
        return cy.get('a')
    }

    clientSideDelayButton(){
        return cy.get(':nth-child(2) > :nth-child(2) > h3 > a')
 
    }

    triggeringClientSideButton(){
        return cy.get('#ajaxButton')
    }

    dataSuccessmessageClientSide(){
        return cy.get('.bg-success')
    }

    clickHomeLabel(){
        return cy.get(':nth-child(2) > :nth-child(3) > h3 > a')
    }

    buttonIgnoresDOM(){
        return cy.get('#badButton')
    }

}
export default basePlayGroundPage
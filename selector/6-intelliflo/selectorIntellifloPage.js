class selectorNioPage {

    navigationNIOHome(){
        return cy.visit('https://www.intelliflo.com/')
    }

    languageHomeDropdown(){
        return cy.get('#menu-item-wpml-ls-21-en')
    }

    languageUSHomeDropdown(){
        return cy.get('#menu-item-wpml-ls-21-us > [title="US"]')
    }

    usLabelHome(){
        return cy.get('.is-to-fade__up--bounce-1')
    }

    cookiesModal(){
        return cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler')
    }

    redBlackLabel(){
        return cy.get(':nth-child(1) > .c-b-cards__card__content > .c-b-cards__card__content__copy--three > .is-prefix > h3')
    }

    redBlackLink(){
        return cy.get(':nth-child(1) > .c-b-cards__card__content > .c-btn--link > a')
    }

    closePopUpButton(){
        return cy.get('.is-close')
    }

    redBlackTittleLabel(){
        return cy.get('.is-to-fade__up--bounce-1')
    }

    ioManagedLabel(){
        return cy.get(':nth-child(2) > .c-b-cards__card__content > .c-b-cards__card__content__copy--three > h3')
    }

    ioManagedLink(){
        return cy.get(':nth-child(2) > .c-b-cards__card__content > .c-btn--link > a')
    }

    ioManagedTitle(){
        return cy.get('.is-to-fade__up--bounce-1')
    }
}

export default selectorNioPage
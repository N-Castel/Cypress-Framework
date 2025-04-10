class baseAmazonPage {
    navigationHome(){
        return  cy.visit('https://www.amazon.com/')
    }

    changeLocationButton(){
        return cy.get('[data-action-type="SELECT_LOCATION"]')
    }

    countryDropdownHome(){
        return cy.get('#GLUXCountryList')
    }

    acceptCountryDrop(){
        return cy.get('.glow-toaster-footer > .a-button-base')
    }

    doneModifyLocationButton(){
        return cy.get('#a-autoid-3-announce')
    }

    searchToolbar(){
        return cy.get('.nav-search-field')
    }

    tittleResultslabel(){
        return cy.get('.a-color-state')
    }

    renewedlabelLink(){
        return cy.get('#p_n_condition-type\/16907720011 > .a-list-item > .a-link-normal > .a-size-base')
    }

    rangeLower(){
        return cy.get('.s-lower-bound input[type="range"]')
    }

    rangeUpper(){
        return cy.get('.s-upper-bound input[type="range"]')
    }

    screenSize14InchesCheckbox(){
        return cy.xpath('//*[@id="p_n_size_browse-bin/2423840011"]/span/a/div/label/i')
    }

    screenSize15InchesCheckbox(){
        return cy.xpath('//*[@id="p_n_size_browse-bin/2423841011"]/span/a/div/label/i')
    }

    intelCPUModelCheckbox(){
        return cy.xpath('//*[@id="p_n_feature_thirty-one_browse-bin/23716064011"]/span/a/div/label/i')
    }

    portatilJumperAddCartButton(){
        return cy.get('.a-button-primary #a-autoid-38-announce')
    }

    cartNav(){
        return cy.get('#nav-cart-count')
    }

    popUpProductAddded(){
        return cy.get('.a-changeover-inner > .a-size-small')
    }

}

export default baseAmazonPage
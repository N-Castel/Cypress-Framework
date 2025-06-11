class selectorGlobalBase {

    seachInput(){
        return cy.get('#search')
    }

    titleAfterSearch(){
        return cy.get('.base')
    }

    shirtProduct(){
        return cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo')
    }

    sizeProduct(){
        return cy.get('#option-label-size-143-item-167')
    }

    colorProduct(){
        return cy.get('#option-label-color-93-item-56')
    }

    addtoCartButton(){
        return cy.get('#product-addtocart-button')
    }

    cartItems(){
        return cy.get('.counter-number')
    }

}

export default selectorGlobalBase
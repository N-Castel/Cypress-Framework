class aliExpresspage{

    navigationAliHome(){
        return cy.visit('https://best.aliexpress.com/')
    }

    searchToolBar(){
        return cy.get('#search-words')
    }

    noteItem(){
        return cy.get('#card-list > div:nth-child(4)')
    }

    
    
}
export default aliExpresspage
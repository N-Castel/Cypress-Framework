import aliExpresspage from "../../../selector/5-baseAliExpress/selectorAliExpress";
 

const baseAliExPage = new aliExpresspage

describe('AliExpress test', () => {

        beforeEach(() => {
            baseAliExPage.navigationAliHome()
        })
    
        it('Search Ìtem', () => {
            baseAliExPage.searchToolBar().click()
            baseAliExPage.searchToolBar().type('notebook gamer')
            baseAliExPage.searchToolBar().type('{enter}')
            cy.xpath('//*[@id="card-list"]/div[1]/div/div/a').click()
        })
})
import rickMortyFixture from "../../fixtures/12-RickmortyFixture/rickMortyFixture.json"
import interceptRickMorty from "../../fixtures/12-RickmortyFixture/interceptAPI.json"

describe('API Testing', () => {


    rickMortyFixture.forEach(rickMortyFixture => {

        it.only('API - Validate existing Character', () => {
            cy.request('GET', 'https://rickandmortyapi.com/api/character/10')
            .its('body')
            .should('deep.eq', rickMortyFixture.character10)
            cy.log('test')
        })

        it.only('API - Validate lenght Character', () => {
            cy.request('GET', 'https://rickandmortyapi.com/api/character')
            .its('body')
            .its('info')
            .its('count')
            .should('eq', 826)
            cy.log('test')
        })

        it('add new todo', () => {
            cy.addAPI(rickMortyFixture.endpointAddRickMorty, rickMortyFixture.character2)

            cy.request('GET', `${rickMortyFixture.endpointToDo}${rickMortyFixture.character2.id}`)
            .its('body')
            .and('deep.eq', rickMortyFixture.character2)
        })

        it('API - update existing ToDo', () => {
            cy.updateAPI(rickMortyFixture.endpointExistingCharacter, rickMortyFixture.character2)

            cy.request('GET', `${rickMortyFixture.endpointAddRickMorty}${rickMortyFixture.character3.id}`)
            .its('body')
            .should('deep.eq', patchObjectKeys)
        })

        it('API - delete existing ToDo', () => {
            cy.deleteAPI(rickMortyFixture.endpointExistingCharacter)

            cy.request('GET', rickMortyFixture.endpointAddRickMorty)
            .its('body')
            .should('have.lenght', 826)
        })

        //  it.only('Intercept - ', () => {
        //     cy.intercept('GET', 'api/character/10', interceptRickMorty.characterIntercept).as('interceptAPI')
        //     cy.request('https://rickandmortyapi.com/api/character')
        //     cy.log('test')
        //     cy.wait('@interceptAPI').then(($intercept) => {
        //         cy.log($intercept)
        //     })
        // })
    })
})

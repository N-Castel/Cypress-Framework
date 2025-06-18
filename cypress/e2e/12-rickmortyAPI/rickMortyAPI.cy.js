import rickMortyFixture from "../../fixtures/12-rickMortyFixture/rickMortyFixture.json"
import interceptRickMorty from "../../fixtures/12-rickmortyFixture/interceptAPI.json"
import { parseNdjson } from "../../support/utils/parseNdjson"

describe('API Testing', () => {


    rickMortyFixture.forEach(rickMortyFixture => {

        it.only('API - Validate existing Character', () => {
            cy.request('GET', 'https://rickandmortyapi.com/api/character/10')
            .its('body')
            .should('deep.eq', rickMortyFixture.character10)
            cy.log('test')
        })

        it.only('API - Validate lenght Character', () => {
            cy.request('GET', rickMortyFixture.endpointAddRickMorty)
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
            cy.updateAPI(rickMortyFixture.endpointExistingCharacter, rickMortyFixture.character3)

            cy.request('GET', `${rickMortyFixture.endpointAddRickMorty}${rickMortyFixture.character3.id}`)
            .its('body')
            .should('deep.eq', rickMortyFixture.character3)
        })

        it('API - delete existing ToDo', () => {
            cy.deleteAPI(rickMortyFixture.endpointExistingCharacter)

            cy.request('GET', rickMortyFixture.endpointAddRickMorty)
            .its('body')
            .should('have.lenght', 826)
        })

         it('Intercept - ', () => {
            cy.intercept('GET', 'api/character/10', interceptRickMorty.characterIntercept).as('interceptAPI')
            cy.request('https://rickandmortyapi.com/api/character')
            cy.log('test')
            cy.wait('@interceptAPI').then(($intercept) => {
                cy.log($intercept)
            })
        })

        it.only('Write File -', () => {
            cy.request('GET', rickMortyFixture.endpointAddRickMorty)
            .then($element => {
                cy.log($element.body)
                cy.writeFile(rickMortyFixture.path, $element.body)
            })
        })

        it.only('Take existing fixture and merge existing data with new object', () => {
            cy.request({
                method: 'GET',
                url: rickMortyFixture.endpointAddRickMorty,
                headers: { 'Accept': 'application/json' },
                // Forzamos que no intente hacer parsing automático
                failOnStatusCode: false
            }).then((response) => {
                // Tratamos la respuesta como texto si es necesario
                const raw = response.body;
            
                // Si es un string con varios objetos separados (ej: por salto de línea), armamos el array:
                let objectsArray;
            
                if (typeof raw === 'string') {
                // Intenta detectar varios objetos separados
                    const cleaned = raw
                        .split('\n')                    // dividir por saltos de línea
                        .map(str => str.trim())        // limpiar espacios
                        .filter(Boolean)               // eliminar vacíos
                        .map(str => JSON.parse(str));  // parsear cada uno a objeto
                
                    objectsArray = cleaned;
                } else if (typeof raw === 'object') {
                    // Por si es un solo objeto
                    objectsArray = [raw];
                    }
            
                    cy.readFile(rickMortyFixture.path, { timeout: 1000 }).then((existingData) => {
                        
                        const existingArray = Array.isArray(existingData) ? existingData : [];
                        const merged = existingArray.concat(objectsArray);
                
                        cy.writeFile(rickMortyFixture.path, merged);
                });
            });
        });

    //     it.only('Transforma respuesta manualmente en array y hace merge', () => {
    //     cy.request({
    //         method: 'GET',
    //         url: rickMortyFixture.endpointAddRickMorty,
    //         headers: { 'Accept': 'text/plain' }, // importante para evitar parsing automático
    //         encoding: 'utf8',                    // asegura que lo reciba como string
    //         failOnStatusCode: false
    //       }).then((res) => {
    //         const parsedData = parseNdjson(res.body);
          
    //         cy.readFile(rickMortyFixture.path, { timeout: 1000 }).then((existingData) => {
    //           const existingArray = Array.isArray(existingData) ? existingData : [];
    //           const merged = existingArray.concat(parsedData);
    //           cy.writeFile(rickMortyFixture.path, merged);
    //         });
    //       });
    // });
    })
})

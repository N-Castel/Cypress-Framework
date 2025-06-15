import selectorDemo from "../../selector/10-demo/selectorDemo"
import demoFixture from "../../fixtures/10-demo/demoFixture.json"

const demoSelector = new selectorDemo

describe('demoQA Test', () => {

    beforeEach(() => {
        cy.visitDemoQA()
    })

    demoFixture.forEach(demoFixture => {
        
        it('Validate fields color after click Submit', () => {
            demoSelector.submitButton().click()
            demoSelector.firstNameInput().should('have.css', 'border-color', demoFixture.redColor)
            demoSelector.lastNameInput().should('have.css', 'border-color', demoFixture.redColor)
            demoSelector.emailInput().should('have.css', 'border-color', demoFixture.greenColor)
            demoSelector.maleRadioButton().should('have.css', 'color', demoFixture.redColor)
            demoSelector.femaleRadioButton().should('have.css', 'color', demoFixture.redColor)
            demoSelector.otherRadioButton().should('have.css', 'color', demoFixture.redColor)
            demoSelector.mobileInput().should('have.css', 'border-color', demoFixture.redColor)
            demoSelector.dateOfbirthDatePicker().should('have.css', 'border-color', demoFixture.greenColor)
            demoSelector.sportCheckbox().should('have.css', 'color', demoFixture.greenColor)
            demoSelector.readingCheckbox().should('have.css', 'color', demoFixture.greenColor)
            demoSelector.musicCheckbox().should('have.css', 'color', demoFixture.greenColor)
            demoSelector.currentAddress().should('have.css', demoFixture.borderColor, demoFixture.greenColor)
        })

        it('Custom commands - Fill out form succesfully', () => {
            cy.fillOutForm(demoFixture.userFormData)
        
                const secondColumnValues = [];
              
                demoSelector.tableUserValuesColumn1().each(() => {
                    
                    demoSelector.tableUserValuesColumn1().invoke('text').then((tableValues) => {
                        secondColumnValues.push(tableValues.trim())})
                }).then(() => {    
                    expect(secondColumnValues[0]).to.include(demoFixture.userFormData.name)
                    expect(secondColumnValues[1]).to.include(demoFixture.userFormData.lastname)
                    expect(secondColumnValues[2]).to.include(demoFixture.userFormData.address)
                    expect(secondColumnValues[3]).to.include(demoFixture.userFormData.email)
                    expect(secondColumnValues[4]).to.include(demoFixture.userFormData.mobile)
                    expect(secondColumnValues[5]).to.include(demoFixture.userFormData.socialStudies)
                    expect(secondColumnValues[6]).to.include(demoFixture.userFormData.stateAndCity)
                    expect(secondColumnValues[7]).to.include(demoFixture.userFormData.music)
                    expect(secondColumnValues[8]).to.include(demoFixture.userFormData.sports)
                    expect(secondColumnValues[9]).to.include(demoFixture.userFormData.reading)

                    });
            
            demoSelector.headerThanksSubmitting().then($element => {
                const headerSubmit = $element.text()
                expect(headerSubmit).to.contains(demoFixture.thanksSubmitForm)
            })
        })

        it('Custom commands - Fill form with required fields', () => {
            cy.fillForm(demoFixture.userFormData);

            demoSelector.headerThanksSubmitting().then($element => {
                const headerSubmit = $element.text()
                expect($element).to.have.text(demoFixture.thanksSubmitForm)
            })
        })

        it('Web tables - Validate Age ', () => {
            cy.Webtables()
            demoSelector.tableTitle().should('have.text', demoFixture.webTableTitle)
            demoSelector.webtable().each(()=>{
                demoSelector.webtable().invoke('text').then($tableElement => {
                    const age = $tableElement

                    expect(age).include(demoFixture.userFormTableData.age)
                })
            })
        })

        it('Add new row in the table', () => {
            cy.Webtables()
            cy.completeAllFormFields(demoFixture.userFormTableData)
            // demoSelector.webtable().each(()=>{
                demoSelector.webtable().invoke('text').then($tableNewElement => {
                    const newRowValues = $tableNewElement

                    expect(newRowValues).include(demoFixture.userFormTableData.name)
                    expect(newRowValues).include(demoFixture.userFormTableData.lastname)
                    expect(newRowValues).include(demoFixture.userFormTableData.age)
                    expect(newRowValues).include(demoFixture.userFormTableData.email)
                    expect(newRowValues).include(demoFixture.userFormTableData.salary)
                    expect(newRowValues).include(demoFixture.userFormTableData.department)
                })
            // })
        })

        it('Upload test - ', () => {
            cy.uploadFiles(demoFixture.file)
            demoSelector.pathUploadedFile().should('be.visible')
        })

        it('Intercept', () => {
            cy.visit('https://rickandmortyapi.com')
            cy.intercept('GET', '/api/character', {fixture: '10-demo/rickMorty.json'})
            cy.log('test')
        })
    })
})

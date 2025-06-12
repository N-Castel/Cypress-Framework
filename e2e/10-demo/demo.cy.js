import selectorDemo from "../../selector/10-demo/selectorDemo"
import demoFixture from "../../fixtures/10-demo/demoFixture.json"

const demoSelector = new selectorDemo

describe('demoQA Test', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
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
    })
})

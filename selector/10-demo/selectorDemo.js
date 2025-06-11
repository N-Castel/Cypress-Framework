class selectorDemoQA {
        
    firstNameInput(){
        return cy.get('#firstName')
    }

    lastNameInput(){
        return cy.get('#lastName')
    }

    emailInput(){
        return cy.get('#userEmail')
    }

    maleRadioButton(){
        return cy.get('label[for=gender-radio-1]')
    }

    femaleRadioButton(){
        return cy.get('label[for=gender-radio-2]')
    }

    otherRadioButton(){
        return cy.get('label[for=gender-radio-3]')
    }

    mobileInput(){
        return cy.get('#userNumber')
    }

    dateOfbirthDatePicker(){
        return cy.get('#dateOfBirthInput')
    }

    subjectDrop(){
        return cy.get('.subjects-auto-complete__value-container')
    }

    socialStudiesDropItem(){
        return cy.get('#react-select-2-option-0')
    }

    sportCheckbox(){
        return cy.get('label[for=hobbies-checkbox-1]')
    }

    readingCheckbox(){
        return cy.get('label[for=hobbies-checkbox-2]')
    }

    musicCheckbox(){
        return cy.get('label[for=hobbies-checkbox-3]')
    }

    currentAddress(){
        return cy.get('#currentAddress')
    }

    stateDropdown(){
        return cy.get('#state > div > div.css-1hwfws3')
    }

    selectStateDropdownItem(){
        return cy.get('#react-select-3-option-0')
    }

    cityDropdown(){
        return cy.get('#city')
    }

    selectCityDropdownItem(){
        return cy.get('#react-select-4-option-0')
    }

    submitButton(){
        return cy.get('#submit')
    }

    tableUserData(){
        return cy.get('tr')
    }

    tableUserValuesColumn1(){
        return cy.get('td:nth-child(2)')
    }

    headerThanksSubmitting(){
        return cy.get('div.modal-header')
    }
}

export default selectorDemoQA

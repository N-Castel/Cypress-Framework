class baseTestAutomationP {

    navigatehome(){
        cy.visit('https://testautomationpractice.blogspot.com/')
    };

    navigateHeroHome(){
        cy.visit('https://the-internet.herokuapp.com/login')
    }

    automationPracticeTitle(){
        return cy.get('.post-title > a')
    };

    nameField(){
        return cy.get('#name')
    };

    emailField(){
        return cy.get('#email')
    };

    phoneField(){
        return cy.get('#phone')
    };

    addressField(){
        return cy.get('#textarea')
    };

    genderMaleRadioButton(){
        return cy.get('#male')
    };

    genderFemaleRadioButton(){
        return cy.get('#female')
    };

    allDaysCheckbox(){
        return cy.get('#post-body-1307673142697428135 > :nth-child(11)')
    };

    dayMondayCheckBox(){
        return cy.get('#monday')
    };

    dayTuesdayCheckBox(){
        return cy.get('#tuesday')
    };

    dayWednesdayCheckBox(){
        return cy.get('#wednesday')
    };

    dayThursdayCheckBox(){
        return cy.get('#thursday')
    };

    dayFridayCheckBox(){
        return cy.get('#friday')
    };

    daySaturdayCheckBox(){
        return cy.get('#saturday')
    };

    daySundayCheckBox(){
        return cy.get('#sunday')
    };

    countryDropdown() {
        return cy.get('#country')
    };

    colorsList(){
        return cy.get('#colors')
    };

    animalList() {
        return cy.get('#animals')
    };

    datePicker1(){
        return cy.get('#datepicker')
    };

    datePicker2(){
        return cy.get('#txtDate')
    };

    dayDatePicker2(){
        return cy.get('.ui-state-default')
    };

    monthDatePicker2(){
        return cy.get('.ui-datepicker-month')
    };

    yearDatePicker2(){
        return cy.get('.ui-datepicker-year')
    };

    datePickerStartDate(){
        return cy.get('.start-date')
    };

    datePickerEndDate(){
        return cy.get('.end-date')
    };

    homeButton(){
        return cy.get('.home-link')
    }

    tableStatic(){
        return cy.get('#HTML1 > .widget-content > table > tbody > ')
    }

    tableAutomationStatic() {
        return cy.get('#HTML1 > .widget-content > table > tbody > tr > td:nth-child(1)')
    }

    taskTable() {
        return cy.get('#taskTable')
    }

    labelCPUloadChrome(){
        return cy.get('.chrome-cpu')
    }

    pagination2Button(){
        return cy.get('#pagination > :nth-child(2)')
    }

    productTableNameValues(){
        return cy.get('#productTable > tbody > tr > td:nth-child(2)')
    }

    actionCameraTablePaginationCheck(){
        return cy.get(':nth-child(3) > :nth-child(4) > input')
    }

    searchWikiField(){
        return cy.get('#Wikipedia1_wikipedia-search-input')
    }

    searchWikiButton(){
        return cy.get('.wikipedia-search-button')
    }

    option3WikiSeacrh(){
        return cy.get('#Wikipedia1_wikipedia-search-results > :nth-child(3) > a')
    }

    alertButtton(){
        return cy.get('#alertBtn')
    }

    alertLabel(){
        return cy.get('#demo')
    }

    confirmationAlertButton(){
        return cy.get('#confirmBtn')
    }

    promptButton(){
        return cy.get('#promptBtn')
    }

    pointMeButton(){
        return cy.get('.dropdown-content')
    }

    laptopMouseHoverOption(){
        return cy.get('.dropdown-content > :nth-child(2)')
    }

    field2Input(){
        return  cy.get('.widget-content > #field2 ')
    }

    copyTextButton(){
        return cy.get('#HTML10 > .widget-content > button')
    }

    priceRange(){
        return cy.get('#amount')
    }

    scrollingDropdown() {
        return cy.get('#comboBox')
    }

    item23() {
        return cy.get('#dropdown > :nth-child(23)')
    }

    bodyCss(){
        return cy.get('#post-body-1307673142697428135')
    }
}

export default baseTestAutomationP
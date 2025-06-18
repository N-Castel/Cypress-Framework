// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import selectDemoQA from "../selector/10-demo/selectorDemo"
import selectorSauceDemo from "../selector/11-sauceDemo/sauceDemoSelector"
import { parseNdjson } from "./utils/parseNdjson"
import 'cypress-file-upload'

const selectorDemoQA = new selectDemoQA

const selectSauceDemo = new selectorSauceDemo

//Visit demoQA Website

Cypress.Commands.add('visitDemoQA', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
})

//To look a field that is hide in the frame
Cypress.Commands.add('iframe', {prevSubject: 'element'}, ($iframe, selector) => {
    Cypress.log({
        name: 'iframe',
        consoleProps(){
            return{
                $iframe:$iframe,
            }
        }
    })
    return new Cypress.Promise(resolve => {
        resolve($iframe.contents().find(selector))
    })
})

//Create the login to be used in the test
Cypress.Commands.add('login', () => {
    cy.visit('https://the-internet.herokuapp.com');
    cy.request({
        method: 'POST',
        url: '/authenticate',
        form: true,
        body: {
            username: 'tomsmith',
            password: 'SuperSecretPassword!' 
        }
    })
    cy.getCookie('rack.session').should('exist');
    cy.visit('https://the-internet.herokuapp.com/secure');
})

//To open a new tab in the same window 

Cypress.Commands.add('visitInSameTab', (url) => {
    cy.on('window:before:load'), (win) => {
        cy.stub(win, 'open').as('windowOpen').callsFake( () => {
            cy.visit(url)
        })
    }
})

// to fix error when navigating demoQA

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  it('fix to visit demoQA', function () {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

// complete form with required fields

Cypress.Commands.add('fillForm', (userdata) => {
    selectorDemoQA.firstNameInput().type(userdata.name)
    selectorDemoQA.lastNameInput().type(userdata.lastname)
    selectorDemoQA.maleRadioButton().click()
    selectorDemoQA.mobileInput().type(userdata.mobile)
    selectorDemoQA.submitButton().click()

  })

//complete form with ALL fields

Cypress.Commands.add('fillOutForm', (dataAll) => {
    selectorDemoQA.firstNameInput().type(dataAll.name)
    selectorDemoQA.lastNameInput().type(dataAll.lastname)
    selectorDemoQA.emailInput().type(dataAll.email)
    selectorDemoQA.femaleRadioButton().click()
    selectorDemoQA.mobileInput().type(dataAll.mobile)
    selectorDemoQA.subjectDrop().type(dataAll.socialStudies)
    selectorDemoQA.socialStudiesDropItem().click()
    selectorDemoQA.sportCheckbox().click()
    selectorDemoQA.readingCheckbox().click()
    selectorDemoQA.musicCheckbox().click()
    selectorDemoQA.currentAddress().type(dataAll.address)
    selectorDemoQA.stateDropdown().click()
    selectorDemoQA.selectStateDropdownItem().click()
    selectorDemoQA.cityDropdown().click()
    selectorDemoQA.selectCityDropdownItem().click()
    selectorDemoQA.submitButton().click()
})


// go Web tables

Cypress.Commands.add('Webtables', () => {
    selectorDemoQA.elementButton().click()
    selectorDemoQA.tableButton().click()
})


//complete form to add new table

Cypress.Commands.add('completeAllFormFields', (dataForm) => {
    selectorDemoQA.addbutton().click()
    selectorDemoQA.firstNameForm().type(dataForm.name)
    selectorDemoQA.lastNameForm().type(dataForm.lastname)
    selectorDemoQA.emailForm().type(dataForm.email)
    selectorDemoQA.edadForm().type(dataForm.age)
    selectorDemoQA.salaryForm().type(dataForm.salary)
    selectorDemoQA.department().type(dataForm.department)
    selectorDemoQA.submitFormButton().click()
})


//Go to upload files 

Cypress.Commands.add('uploadFiles', (file) => {
    selectorDemoQA.elementButton().click()
    selectorDemoQA.uploadDownloadButton().click()
    selectorDemoQA.uploadButton().attachFile(file)
})

// sauceDemolOGIN 

Cypress.Commands.add('sauceDemoLogin', (dataFixture) => {
    selectSauceDemo.userNameInput().type(dataFixture.username)
    selectSauceDemo.passwordInput().type(dataFixture.password)
    selectSauceDemo.loginButton().click()
})

// navigate endpoint

Cypress.Commands.add('addAPI', (endpoint, object) => {
    cy.request('POST', endpoint, object)
})

Cypress.Commands.add('updateAPI', (endpoint, object, id) => {
    cy.request('PATCH', endpoint, object)
})

Cypress.Commands.add('deleteAPI', () => {
    cy.request('DELETE', endpointForDeleted)
})

Cypress.Commands.add('parseNdjson', parseNdjson)
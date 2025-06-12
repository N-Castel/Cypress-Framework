import selectorTestAutomation from '../../selector/2-baseTestAutomationPage/selectorTestAutomation'
import dataCredentials from "../../fixtures/2-practiceTstAutomationFixture/dataCredentials.json"

const selectAutomationPage = new selectorTestAutomation

describe('Test Automation Practice', () => {

    beforeEach(() => {
        selectAutomationPage.navigatehome();
    })
    
        it('Complete the form', () => {
            selectAutomationPage.nameField().should('exist');
            selectAutomationPage.nameField().click();
            selectAutomationPage.nameField().type('name Frame');
            selectAutomationPage.emailField().should('exist');
            selectAutomationPage.emailField().click();
            selectAutomationPage.emailField().type('last name Frame');
            selectAutomationPage.phoneField().should('exist');
            selectAutomationPage.phoneField().click();
            selectAutomationPage.phoneField().type('123456789');
            selectAutomationPage.addressField().should('exist');
            selectAutomationPage.addressField().click();
            selectAutomationPage.addressField().type('Address test')
        });

        it('radioButton in Male', () => {
            selectAutomationPage.genderMaleRadioButton().should('exist');
            selectAutomationPage.genderMaleRadioButton().check();
            selectAutomationPage.genderMaleRadioButton().should('be.checked')
        });

        it('radiobutton in Female', () => {
            selectAutomationPage.genderFemaleRadioButton().should('exist');
            selectAutomationPage.genderFemaleRadioButton().check();
            selectAutomationPage.genderFemaleRadioButton().should('be.checked')

        });

        it('check all days checkbox', () => {
            
            selectAutomationPage.allDaysCheckbox().each(($element) => {
                const allDaysCheckbox = $element.text()

                if(allDaysCheckbox.includes('Friday' || 'Monday' || 'Tuesday' || 'Wednesday' || 'Thursday' || 'Saturday' || 'Sunday' )) {
                    cy.log(allDaysCheckbox);
                    selectAutomationPage.dayMondayCheckBox().check();
                    selectAutomationPage.dayMondayCheckBox().should('be.checked')
                }
            })
        })

        it('Validate and Select dropdown Option', () => {
            selectAutomationPage.countryDropdown().select('Japan');
            selectAutomationPage.countryDropdown().should('contain', 'Japan')
        });

        it('Select Color in a list', () => {
            selectAutomationPage.colorsList().select('Red');
            selectAutomationPage.colorsList().should('contain', 'Red')
        })

        it('Select Animal in a list', () => {
            selectAutomationPage.animalList().select('Lion');
            selectAutomationPage.animalList().should('contain', 'Lion')
        })

        it('Using datepicker #1', () => {
            selectAutomationPage.datePicker1().type('12/12/2023');
            selectAutomationPage.datePicker1().click();
            // selectAutomationPage.datePicker1().should('contain', '12/12/2023' ) no pude validar
            selectAutomationPage.bodyCss().click()
        })

        it('Using datepicker 2', () => {
            selectAutomationPage.datePicker2().then(dayToUse => {
                cy.wrap(dayToUse).click();
                cy.get('.ui-state-default').contains('23').click({force:true})
            })
        })

        it('Using datepicker 2 with month', () => {
            selectAutomationPage.datePicker2().click();
            selectAutomationPage.monthDatePicker2().select('Dec'); //Selecciona el mes del dropdown
        });

        it('Using datepicker 2 with year', () => {
            selectAutomationPage.datePicker2().click();
            selectAutomationPage.yearDatePicker2().select('2023'); //Selecciona el mes del dropdown
        }); 

        it('Click Home button', () => {
            selectAutomationPage.homeButton().click()
            cy.title().should('include', 'Automation Testing Practice')
        }) 

        it('Validate value in a Static table', () => {
            selectAutomationPage.tableStatic().each((columnsElemnts) => {
                const staticColumn1Elements = columnsElemnts.text();

                    
                if(staticColumn1Elements.includes('Master In Selenium')) {
                        cy.log(staticColumn1Elements)
                }
            })
        }) 

        it('Validate value in static table', () => {
            selectAutomationPage.tableAutomationStatic().each(($element, index) => {
                const allValuesColumn1 = $element.text();
            
                if(allValuesColumn1.includes('Master in JS')) {
                    selectAutomationPage.tableAutomationStatic().eq(index).next().next().then((value) => {
                        
                        const afterLearnValue = value.text();
                        
                        expect(afterLearnValue).equals('Javascript');
                    })
                }
            })
        })

        it('Validate value in a Dynamic table', () =>{

            selectAutomationPage.taskTable().each((elem) =>{
                const getColumn1Element = elem.text();
                cy.log(getColumn1Element);
                
                if(getColumn1Element.includes('5.8%')) {
                    cy.log(getColumn1Element)
                }
            })
        })

        it('Table with Pagination', () => {
            selectAutomationPage.pagination2Button().click()
            selectAutomationPage.productTableNameValues().each(($element) => {
                const tableRowValues = $element.text()
            
                if(tableRowValues.includes('Action Camera')) { 
                    selectAutomationPage.actionCameraTablePaginationCheck().check();
                    selectAutomationPage.actionCameraTablePaginationCheck().should('be.checked')
                }
            })    
        })

        it('Tabs', () => {
            selectAutomationPage.searchWikiField().click();
            selectAutomationPage.searchWikiField().type('test qa');
            selectAutomationPage.searchWikiButton().click()
            selectAutomationPage.option3WikiSeacrh().invoke('removeAttr', 'target').click() //remove atributte that opens the link in a new tab
        })


        it('Dynamic button', () => {
            cy.get('.start').then((dynamicValue) => {
                
                const value = dynamicValue.text()
                
                expect(value).equals('START')
            })
            cy.get('.start').click();
            cy.get('.start').should('not.exist')
            cy.get('.stop').then((stop) => {
                
                const value1 = stop.text()

                expect(value1).equals('STOP')

            })
        })

        it('Simple Pop-up alert', () =>  {
            selectAutomationPage.alertButtton().click();
            cy.on('window:alert', (alertStr) => {
                expect(alertStr).equal('I am an alert box!')
            })
        })

        it('Confirmation alert', () => {
            selectAutomationPage.confirmationAlertButton().click();
            cy.on('window:confirm', () => true);
            selectAutomationPage.alertLabel().should('have.text', 'You pressed OK!')
        })

        it('Prompt Alert', () => {
            cy.window().then(($prompt) => {
            cy.stub($prompt, 'prompt').returns('Test name');
            selectAutomationPage.promptButton().click()
            })
        
            selectAutomationPage.alertLabel().should('have.text', 'Hello Test name! How are you today?')
        })

        it('Mouse Hover', () => {
            selectAutomationPage.pointMeButton().invoke('show')
            selectAutomationPage.laptopMouseHoverOption().click();
            // cy.get('.dropdown-content > :nth-child(2)').click({force: true}) //click without display the menu

        })

        // it('Double click', () => {
        //     selectAutomationPage.field2Input().should('have.text', '');
        //     selectAutomationPage.copyTextButton().dblclick();
        //     selectAutomationPage.field2Input().should('have.text', 'Hello World!')
        // })

        it('slide test', () => {
        // selectAutomationPage.priceRange().should('have.text', '$75 - $300');
        cy.get('[style="left: 15%;"]').invoke('val', '100').trigger('change')
        })
        

        it('dropdown with scroll test', () => {
            selectAutomationPage.scrollingDropdown().click();
            selectAutomationPage.item23().click()
        })

    // dataCredentials.forEach(dataCredentials => {
    
    //     it('Fixture test ', function () {
    //         cy.get('#name').type(dataCredentials.username);
    //         cy.get('#password').type(dataCredentials.password);
    //         cy.get('.fa').click()

    //         dataCredentials.name === 'Standart User' ? cy.url().should('include', dataCredentials.expected) : cy.url().should('not.include', dataCredentials.expected)  
    //     })
    // })
})

import baseTestAutomationP from '../../../pages/2-baseTestAutomationPage/baseTestAutomationPage'

const baseAutomationPage = new baseTestAutomationP

const dataCredentials = require ('../../../fixtures/2-practiceTstAutomationFixture/dataCredentials.json')


describe('Test Automation Practice', () => {

    beforeEach(() => {
        baseAutomationPage.navigateHeroHome();
    })
    
    dataCredentials.forEach(dataCredentials => {

        it('Complete the form', () => {
            
            baseAutomationPage.nameField().should('not.exist');
            baseAutomationPage.nameField().click();
            baseAutomationPage.nameField().type('name Frame');
            baseAutomationPage.emailField().should('exist');
            baseAutomationPage.emailField().click();
            baseAutomationPage.emailField().type('last name Frame');
            baseAutomationPage.phoneField().should('exist');
            baseAutomationPage.phoneField().click();
            baseAutomationPage.phoneField().type('123456789');
            baseAutomationPage.addressField().should('exist');
            baseAutomationPage.addressField().click();
            baseAutomationPage.addressField().type('Address test')
        });

        it('radioButton in Male', () => {
            baseAutomationPage.genderMaleRadioButton().should('exist');
            baseAutomationPage.genderMaleRadioButton().check();
            baseAutomationPage.genderMaleRadioButton().should('be.checked')
        });

        it('radiobutton in Female', () => {
            baseAutomationPage.genderFemaleRadioButton().should('exist');
            baseAutomationPage.genderFemaleRadioButton().check();
            baseAutomationPage.genderFemaleRadioButton().should('be.checked')

        });

        it('check all days checkbox', () => {
            
            baseAutomationPage.allDaysCheckbox().each(($element) => {
                const allDaysCheckbox = $element.text()

                if(allDaysCheckbox.includes('Friday' || 'Monday' || 'Tuesday' || 'Wednesday' || 'Thursday' || 'Saturday' || 'Sunday' )) {
                    cy.log(allDaysCheckbox);
                    baseAutomationPage.dayMondayCheckBox().check();
                    baseAutomationPage.dayMondayCheckBox().should('be.checked')
                }
            })
        })

        it('Validate and Select dropdown Option', () => {
            baseAutomationPage.countryDropdown().select('Japan');
            baseAutomationPage.countryDropdown().should('contain', 'Japan')
        });

        it('Select Color in a list', () => {
            baseAutomationPage.colorsList().select('Red');
            baseAutomationPage.colorsList().should('contain', 'Red')
        })

        it('Select Animal in a list', () => {
            baseAutomationPage.animalList().select('Lion');
            baseAutomationPage.animalList().should('contain', 'Lion')
        })

        it('Using datepicker #1', () => {
            baseAutomationPage.datePicker1().type('12/12/2023');
            baseAutomationPage.datePicker1().click();
            // baseAutomationPage.datePicker1().should('contain', '12/12/2023' ) no pude validar
            baseAutomationPage.bodyCss().click()
        })

        it('Using datepicker 2', () => {
            baseAutomationPage.datePicker2().then(dayToUse => {
                cy.wrap(dayToUse).click();
                cy.get('.ui-state-default').contains('23').click({force:true})
            })
        })

        it('Using datepicker 2 with month', () => {
            baseAutomationPage.datePicker2().click();
            baseAutomationPage.monthDatePicker2().select('Dec'); //Selecciona el mes del dropdown
        });

        it('Using datepicker 2 with year', () => {
            baseAutomationPage.datePicker2().click();
            baseAutomationPage.yearDatePicker2().select('2023'); //Selecciona el mes del dropdown
        }); 

        it('Click Home button', () => {
            baseAutomationPage.homeButton().click()
            cy.title().should('include', 'Automation Testing Practice')
        }) 

        it('Validate value in a Static table', () => {
            baseAutomationPage.tableStatic().each((columnsElemnts) => {
                const staticColumn1Elements = columnsElemnts.text();

                    
                if(staticColumn1Elements.includes('Master In Selenium')) {
                        cy.log(staticColumn1Elements)
                }
            })
        }) 

        it('Validate value in static table', () => {
            baseAutomationPage.tableAutomationStatic().each(($element, index) => {
                const allValuesColumn1 = $element.text();
            
                if(allValuesColumn1.includes('Master in JS')) {
                    baseAutomationPage.tableAutomationStatic().eq(index).next().next().then((value) => {
                        
                        const afterLearnValue = value.text();
                        
                        expect(afterLearnValue).equals('Javascript');
                    })
                }
            })
        })

        it('Validate value in a Dynamic table', () =>{

            baseAutomationPage.taskTable().each((elem) =>{
                const getColumn1Element = elem.text();
                cy.log(getColumn1Element);
                
                if(getColumn1Element.includes('5.8%')) {
                    cy.log(getColumn1Element)
                }
            })
        })

        it('Table with Pagination', () => {
            baseAutomationPage.pagination2Button().click()
            baseAutomationPage.productTableNameValues().each(($element) => {
                const tableRowValues = $element.text()
            
                if(tableRowValues.includes('Action Camera')) { 
                    baseAutomationPage.actionCameraTablePaginationCheck().check();
                    baseAutomationPage.actionCameraTablePaginationCheck().should('be.checked')
                }
            })    
        })

        it('Tabs', () => {
            baseAutomationPage.searchWikiField().click();
            baseAutomationPage.searchWikiField().type('test qa');
            baseAutomationPage.searchWikiButton().click()
            baseAutomationPage.option3WikiSeacrh().invoke('removeAttr', 'target').click() //remove atributte that opens the link in a new tab
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
            baseAutomationPage.alertButtton().click();
            cy.on('window:alert', (alertStr) => {
                expect(alertStr).equal('I am an alert box!')
            })
        })

        it('Confirmation alert', () => {
            baseAutomationPage.confirmationAlertButton().click();
            cy.on('window:confirm', () => true);
            baseAutomationPage.alertLabel().should('have.text', 'You pressed OK!')
        })

        it('Prompt Alert', () => {
            cy.window().then(($prompt) => {
            cy.stub($prompt, 'prompt').returns('Test name');
            baseAutomationPage.promptButton().click()
            })
        
            baseAutomationPage.alertLabel().should('have.text', 'Hello Test name! How are you today?')
        })

        it('Mouse Hover', () => {
            baseAutomationPage.pointMeButton().invoke('show')
            baseAutomationPage.laptopMouseHoverOption().click();
            // cy.get('.dropdown-content > :nth-child(2)').click({force: true}) //click without display the menu

        })

        // it('Double click', () => {
        //     baseAutomationPage.field2Input().should('have.text', '');
        //     baseAutomationPage.copyTextButton().dblclick();
        //     baseAutomationPage.field2Input().should('have.text', 'Hello World!')
        // })

        it('slide test', () => {
        // baseAutomationPage.priceRange().should('have.text', '$75 - $300');
        cy.get('[style="left: 15%;"]').invoke('val', '100').trigger('change')
        })
        

        it('dropdown with scroll test', () => {
            baseAutomationPage.scrollingDropdown().click();
            baseAutomationPage.item23().click()
        })

        it('Fixture test ', function () {
            cy.get('#username').type(dataCredentials.username);
            cy.get('#password').type(dataCredentials.password);
            cy.get('.fa').click()

            if(dataCredentials.name === 'Standart User'){
                cy.url().should('include', dataCredentials.expected)
            }else{
                cy.url().should('not.include', dataCredentials.expected)
            }
        })
    })
})

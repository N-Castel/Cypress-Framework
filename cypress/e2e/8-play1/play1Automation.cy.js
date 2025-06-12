import selectorPlay1Automation from "../../selector/8-basePlay1/selectorPlay1Automation";
import play1TestFixture from "../../fixtures/8-play1Fixture/play1TestFixture.json"

const basePlay1AutomationPage = new selectorPlay1Automation 

describe('Play1 Automation test', () => {

    beforeEach(()=> {
        basePlay1AutomationPage.navigationHome()
    })

    play1TestFixture.forEach(play1TestFixture => {

        it('cy Title Playground', () => {
            cy.title().should('include', play1TestFixture.play1GroundTitle)
        })

        it('ui titlle', () => {
            basePlay1AutomationPage.uiTitle().should(play1TestFixture.haveText, play1TestFixture.play1GroundSubtitle)
            basePlay1AutomationPage.strongLabel().should(play1TestFixture.contain, play1TestFixture.play1GroundSubtitle1)
        })

        it('What is playground Title', () => {
            basePlay1AutomationPage.whatIsPlayGlabel().eq(0).should(play1TestFixture.haveText, play1TestFixture.whatIsPlayGround)
        })

        it('Available pages Title', () => {
            basePlay1AutomationPage.whatIsPlayGlabel().eq(1).should(play1TestFixture.haveText, play1TestFixture.availablePages)
            basePlay1AutomationPage.whatIsPlayGlabel().eq(1).should(play1TestFixture.haveText, play1TestFixture.availablePages)
        })

        it('Wait conditions Set Min and Max time', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
            if(play1TestFixture.maxWait < play1TestFixture.minWait){
                basePlay1AutomationPage.minWaitInput().clear()
                basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                }
            })
        })

        it('Wait conditions - Alert to be present', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
            if(play1TestFixture.maxWait < play1TestFixture.minWait){
                basePlay1AutomationPage.minWaitInput().clear()
                basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                }
            })

            basePlay1AutomationPage.waitForAlertToBePresentLabel().should(play1TestFixture.haveText, play1TestFixture.waitToBePresent)
            basePlay1AutomationPage.alertTriggerButton().click()
            cy.wait(play1TestFixture.maxWait)
            basePlay1AutomationPage.alertHandled().should(play1TestFixture.visible)
            basePlay1AutomationPage.showPromptButton().click()
            cy.wait(play1TestFixture.maxWait)
            basePlay1AutomationPage.confirmPromptAlert().should(play1TestFixture.visible)
        })

        it('Wait conditions - Alert to be visible', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
            if(play1TestFixture.maxWait < play1TestFixture.minWait){
                basePlay1AutomationPage.minWaitInput().clear()
                basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                }
            })

            basePlay1AutomationPage.waitForAlertToBePresentLabel().should(play1TestFixture.haveText, play1TestFixture.waitForElementToBePresent)
            basePlay1AutomationPage.triggerVisibilityButton().click()
            cy.wait(play1TestFixture.maxWait)
            basePlay1AutomationPage.triggerClickMe().should(play1TestFixture.visible)
            basePlay1AutomationPage.triggerClickMe().click()
        })

        it('Wait conditions - Element to be visible', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
            if(play1TestFixture.maxWait < play1TestFixture.minWait){
                basePlay1AutomationPage.minWaitInput().clear()
                basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                }
            })

            basePlay1AutomationPage.waitForAlertToBeVisibleLabel().eq(0).should(play1TestFixture.haveText, play1TestFixture.waitForElementToBeVisible)
            basePlay1AutomationPage.triggerVisibilityButton().click()
            cy.wait(play1TestFixture.maxWait)
            basePlay1AutomationPage.triggerClickMe().should(play1TestFixture.visible)
            basePlay1AutomationPage.triggerClickMe().click()
            basePlay1AutomationPage.popOverHeaderLabel().should(play1TestFixture.haveText, play1TestFixture.canYouSeeMe)
            basePlay1AutomationPage.popOverBody().should(play1TestFixture.haveText, play1TestFixture.iJustRemoved)
        })

        it('Wait Conditions - Element to be invisible', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
            if(play1TestFixture.maxWait < play1TestFixture.minWait){
                basePlay1AutomationPage.minWaitInput().clear()
                basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                }
            })
            
            basePlay1AutomationPage.waitElementInvisiblelabel().should(play1TestFixture.haveText, play1TestFixture.waitForElementToBeInvisible)
            basePlay1AutomationPage.triggerInvisibleButton().should(play1TestFixture.visible)
            basePlay1AutomationPage.waitForElementInvisibleSpinner().should(play1TestFixture.visible)
            basePlay1AutomationPage.triggerInvisibleButton().click()
            basePlay1AutomationPage.waitForElementInvisibleSpinner().should(play1TestFixture.notVisible)
            basePlay1AutomationPage.spinnerGoneLabel().should(play1TestFixture.haveText, play1TestFixture.spinnerGone)
        })
      
        it('Wait conditions - Wait for an attribute to contain certain text', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
            if(play1TestFixture.maxWait < play1TestFixture.minWait){
                basePlay1AutomationPage.minWaitInput().clear()
                basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                }
            })

            basePlay1AutomationPage.waitForElementClassAttr().eq(1).should(play1TestFixture.haveAttribute, play1TestFixture.class, play1TestFixture.classBtnDanger)
            basePlay1AutomationPage.triggerWaitAttributeContainTextButton().click()
            cy.wait(play1TestFixture.maxWait)
            basePlay1AutomationPage.waitElementAttrDisabledButton().should(play1TestFixture.haveAttribute, play1TestFixture.class, play1TestFixture.classBtnSuccess)
        })

        it('Wait condition - Wait for Page Title to change', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
            if(play1TestFixture.maxWait < play1TestFixture.minWait){
                basePlay1AutomationPage.minWaitInput().clear()
                basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                }
            })

            cy.title().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.triggerUpdatePageTittleButton().click()
            cy.wait(play1TestFixture.maxWait)
            cy.title().should(play1TestFixture.contain, play1TestFixture.myNewTittle)
        })

        it('Wait conditions - Wait for text/value to have specific values', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
            if(play1TestFixture.maxWait < play1TestFixture.minWait){
                basePlay1AutomationPage.minWaitInput().clear()
                basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                }
            })

            basePlay1AutomationPage.inputWaitTextChangeValue().should(play1TestFixture.haveText, '')
            basePlay1AutomationPage.inputWaitTextChangeValue().type(play1TestFixture.inputWaitTextChangeValueChanged)
            basePlay1AutomationPage.triggerWaitTextChangeValueButton().click()
            cy.wait(play1TestFixture.maxWait)
            basePlay1AutomationPage.inputWaitTextChangeValue().should(play1TestFixture.notHaveText, play1TestFixture.inputWaitTextChangeValueChanged)
        })            
      
        it('Wait conditions - Wait for frame to be available and then switch to it', () => {
            basePlay1AutomationPage.waitConditionslabel().should(play1TestFixture.contain, play1TestFixture.waitConditions)
            basePlay1AutomationPage.waitConditionsViewPageButton().click()
            basePlay1AutomationPage.minWaitInput().clear()
            basePlay1AutomationPage.minWaitInput().type(play1TestFixture.minWait)
            basePlay1AutomationPage.maxWaitInput().clear()
            basePlay1AutomationPage.maxWaitInput().type(play1TestFixture.maxWait).then(() => {
                
                if(play1TestFixture.maxWait < play1TestFixture.minWait){
                    basePlay1AutomationPage.minWaitInput().clear()
                    basePlay1AutomationPage.minWaitInput().type(play1TestFixture.maxWait)
                    }
                })
            })     
        
        it('Keyboards actions Exist', () => {
            basePlay1AutomationPage.keyboardTitle().should(play1TestFixture.contain, play1TestFixture.keayboardActionsTitle)
            basePlay1AutomationPage.keyboardDescText().should(play1TestFixture.includeText, play1TestFixture.keyboardDesc)
            basePlay1AutomationPage.keyboadActionsViewPageButton().click()  
        })

        it('Keyboard Subtitle', () => {
            basePlay1AutomationPage.keyboadActionsViewPageButton().click()
            basePlay1AutomationPage.keyArea().click()
            basePlay1AutomationPage.keyArea().click({cmdKey: true}).type('{enter}')
            basePlay1AutomationPage.meta().should(play1TestFixture.haveText, play1TestFixture.meta)
        })
    })
})

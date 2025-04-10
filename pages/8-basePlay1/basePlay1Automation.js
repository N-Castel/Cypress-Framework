class basePlay1Automation {

    navigationHome(){
        return cy.visit('https://play1.automationcamp.ir/')
    }

    uiTitle(){
        return cy.get('h1[class="text-success"]')
    }

    strongLabel(){
        return cy.get('header')
    }

    whatIsPlayGlabel(){
        return cy.get('h4[class="text-center font-weight-bolder"]') 
    }

    waitConditionslabel(){
        return cy.get('body > div.container.shadow-lg > div:nth-child(7) > div:nth-child(1) > div > div.card-header')
    }

    waitConditionsViewPageButton(){
        return cy.get(':nth-child(7) > :nth-child(1) > .card > .card-body > .btn')
    }

    minWaitInput(){
        return cy.get('#min_wait')
    }

    maxWaitInput(){
        return cy.get('#max_wait')
    }

    waitForAlertToBePresentLabel(){
        return cy.get(':nth-child(3) > .card-header > h3')
    }

    alertTriggerButton(){
        return cy.get('#alert_trigger')
    }

    alertHandled(){
        return cy.get('#alert_handled_badge')
    }

    showPromptButton(){
        return cy.get('#prompt_trigger')
    }

    confirmPromptAlert(){
        return cy.get('#confirm_ok')
    }

    waitForAlertToBePresentLabel()
{
    return cy.get(':nth-child(3) > .card-header > h3')
}
    waitForAlertToBeVisibleLabel(){
        return cy.get('body > div.container.align-items-center.text-center > div:nth-child(5) > div.card-header > h3')
    }

    triggerVisibilityButton(){
        return cy.get('#visibility_trigger')
    }

    triggerClickMe(){
        return cy.get('#visibility_target')
    }

    popOverHeaderLabel(){
        return cy.get('.popover-header')
    }

    popOverBody(){
        return cy.get('.popover-body')
    }

    waitElementInvisiblelabel(){
        return cy.get(':nth-child(7) > .card-header > h3')
    }

    triggerInvisibleButton(){
        return cy.get('#invisibility_trigger')
    }

    waitForElementInvisibleSpinner(){
        return cy.get('#invisibility_target')
    }

    spinnerGoneLabel(){
        return cy.get('#spinner_gone')
    }

    triggerWaitAttributeContainTextButton(){
        return cy.get('#enabled_trigger')
    }
    
    waitForElementClassAttr(){
        return cy.get('.btn-danger')
    }

    waitElementAttrDisabledButton(){
        return cy.get('[id="enabled_target"]')
    }

    waitPageTitleChange(){
        return cy.get(':nth-child(11)>.card-header')
    }

    triggerPageChangeButton(){
        return cy.get('#page_title_trigger')
    }

    waitPageTitleLabel(){
        return cy.get(':nth-child(11) > .card-header > h3')
    }

    triggerUpdatePageTittleButton(){
        return cy.get('#page_title_trigger')
    }

    triggerWaitTextChangeValueButton(){
        return cy.get('#text_value_trigger')
    }

    inputWaitTextChangeValue(){
        return cy.get('#wait_for_value')
    }
}

export default basePlay1Automation
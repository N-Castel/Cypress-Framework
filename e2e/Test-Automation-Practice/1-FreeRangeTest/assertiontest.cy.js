describe('Test de assertion', () => {
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    });

    it('Should have Free Range Testers in the title', () => {
        cy.title().should('include', 'Free Range Testers') // Validate Title include a text 
    });

    it('There are 10 Courses with same Ver Producto button', () => {
        cy.get('[data-testid="header-container"] > .sc-duWCru > .sc-cHqXqK > :nth-child(1) > .sc-iuUfFv').click();
        cy.get('.sc-huXwEz > .sc-FFETS > .sc-fufdwm > :nth-child(3) > .sc-epnzzT').should('have.length', 10) // validate lengt(if exist 1 or more controls with same css root)
    });

    it('Validate field class inlude sc-iwXfZk igbhuD', () => {
        cy.get('#email-form-email').should('have.class', 'sc-iwXfZk igbhuD') // validate class of the control
    });

    it('There is a Blog text in the navigation tool', () => {
        cy.get('[data-testid="header-container"] > .sc-duWCru > .sc-cHqXqK > :nth-child(3) > .sc-iuUfFv').should('have.text', 'Blog') // Validate text/value in a control
    });

    it('The element is vivisble', () => {
        //cy.wait(4000) Use in case that the control takes some time to be displayed in the UI
        cy.get('[data-testid="header-container"] > .sc-duWCru > .sc-cHqXqK > :nth-child(3) > .sc-iuUfFv').should('be.visible') // Validate elemet is visible in the UI
    });
/*
    it('The element is not vivisble', () => {
        cy.get('[data-testid="header-container"] > .sc-duWCru > .sc-cHqXqK > :nth-child(3) > .sc-iuUfFv').should('not.be.visible') // Validate elemet is not visible in the UI
    });

    it('Validate the element exist', () => {
        cy.get('[data-testid="header-container"] > .sc-duWCru > .sc-cHqXqK > :nth-child(3) > .sc-iuUfFv').should('exist') // Validate elemet is not visible in the UI but exist(is hide)
    })

    it('The element is checked', () => {
        cy.get('checkbox element').should('be.checked');
    })
    
    it('The element is unchecked', () => {
        cy.get('checkbox element').should('not.be.checked');
    })

    it('The element is disabled', () => {
        cy.get('checkbox element').should('be.disabled');
    })
*/ 
})

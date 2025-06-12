describe('Tables static and Dynamic', ()=> {

    it('Validate value in static table', () => {
        //Go to website
        cy.visit('https://testpages.eviltester.com/styled/tag/table.html')
        cy.log('Fui a la url')
        //Go to the column
        cy.get('tbody > tr > td:nth-child(2)').each(($element, index) => {
        cy.log('estoy en la primera columna')
            //Get text all column 1 values in allValuesColumn values
            const allValuesColumn1 = $element.text();
            cy.log('guardè los valores de la primera columna en una constante')
            //What we need to be in allValuesColumn
            if(allValuesColumn1.includes('Bob')) {
                cy.log('Busquè un valor que incluya Bob ')
                cy.get('tbody > tr > td:nth-child(2)').eq(index).next().then((p) => {
                    cy.log('Estoy en el valor siguiente de Bob')
                    //Take the next element that is after the one that includes Bob
                    const afterBobValue = p.text();
                    cy.log('guardè el valor que esta despuès de Bob')
                    //Validate the afterBobText with the text that we are looking for
                    expect(afterBobValue).equals('23');
                    cy.log('valido que el valor que està despuès de Bob sea 23')
                })
            }
        })
    })

    it('Validate value in a Dynamic table', () =>{
        cy.visit('http://uitestingplayground.com/dynamictable');
        cy.get('[role="table"] > :nth-child(3)').each((elem, index) =>{
            const getColumn1Element = elem.text();
            cy.log(getColumn1Element);
            
            if(getColumn1Element.includes('Chrome')) {
                cy.log(getColumn1Element);
            }
        })
    })
})

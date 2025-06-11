class pageToDo {
        
    navigationtoDos(){
        return cy.visit('https://example.cypress.io/todo#/')
    }

    titleToDo(){
        return cy.get('h1')
    }

    newTodo(){
       return cy.get('body > section > div > header > input')
    }

    payElectricBillTodoItem(){
        return cy.get('body > section > div > section > ul > li:nth-child(1)')
    }

    walkTheDogTodoItem(){
        return cy.get('body > section > div > section > ul > li:nth-child(2)')
    }

    typeNewTodo(newTodo){
        return cy.get('[data-test="new-todo"]').type(newTodo)
    }

    newToDoInputLocator(){
        return cy.get('[data-test="new-todo"]')
    }

    newToDoTestLocator(){
        return cy.get('body > section > div > section > ul > li:nth-child(3)')
    }

    ItemsListLocator(){
        return cy.get('body > section > div > footer > span')
    }

    delete3ItemlistCheck(){
        return cy.get('body > section > div > section > ul > li:nth-child(3) > div > input')
    }

    doubleClickLabel(){
        return cy.get('.info > :nth-child(1)')
    }

    allItemList(){
        return cy.get('ul > li[data-id')
    }

}

export default pageToDo
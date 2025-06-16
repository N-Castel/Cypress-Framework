import selectorToDoTodo from "../../selector/9-Todo/selectorToDo"
import todos from "../../fixtures/9-ToDo/todos.json"

const baseTodoPage = new selectorToDoTodo 

describe('To Do Test ', () => {

    beforeEach(function() {
        baseTodoPage.navigationtoDos().as('requestToDo')
        //  cy.request('https://example.cypress.io/todo#/').as('requestToDo')
    })

    todos.forEach(todos => {

        it('validate Title', () => {
            baseTodoPage.titleToDo().should('have.css', 'color', 'rgb(184, 63, 69)').and('have.text', todos.TodosTitle)
        })

        it('validdate default todo', () => {
            baseTodoPage.newTodo().click()
            baseTodoPage.payElectricBillTodoItem().should('be.visible')
            baseTodoPage.payElectricBillTodoItem().should('have.text', todos.todo1)
            baseTodoPage.walkTheDogTodoItem().should('be.visible')
            baseTodoPage.walkTheDogTodoItem().should('have.text', todos.todo2)
        })

        it('add new todo, and we have 3 items', () => {
            baseTodoPage.typeNewTodo(todos.newTodoTest)
            baseTodoPage.newToDoInputLocator().type('{enter}')
            
            baseTodoPage.allItemList().should($input => {
                    expect($input).to.have.lengthOf(3)
                })
            
            baseTodoPage.newToDoTestLocator().should('have.text', todos.newTodoTest) // validate new item added
            baseTodoPage.ItemsListLocator().should('include.text', todos.ItemsList3label) //validate new item added in the count list
            baseTodoPage.allItemList().eq(2).should('have.not.class', todos.completedClass) // validate class attribute
        })

        it('validate 1 item was deleted, and we have 2 items', () => {
            baseTodoPage.newTodo().type(todos.newTodoTest)
            baseTodoPage.newToDoInputLocator().type('{enter}')
            baseTodoPage.newToDoTestLocator().should('be.visible')
            baseTodoPage.newToDoTestLocator().should('have.text', todos.newTodoTest)
            
        })

        it('Validate default TODOS', () => {
            cy.get('.todo-list li').should('have.length', 2).and('contain', todos.todo1).and('contain', todos.todo2)
        })

        // it.only('Intercept', () => {
        //     cy.get('@requestToDo')
        //     cy.intercept('GET', '/todo#', {fixture: '9-todo/intercept.json'})
        //     cy.log('test')
        // })

        // it.only('Request test - Body', () =>  {
        //     cy.get('@requestToDo')
        //     .its('body').should('exist')
        // })

        // it.only('Request test - Status', () =>  {
        //     cy.get('@requestToDo')
        //     .its('status').should('eq',200)
        // })

        // it.only('Request test - Content type', () =>  {
        //     cy.get('@requestToDo')
        //     .its('headers')
        //     .its('content-type')
        //     .should('include', 'text/html')
        //     .should('include', 'charset=utf-8')
        // })

        // it('Request test - Body with 2 objects (2 toDos)', () =>  {
        //     cy.get('@requestToDo')
        //     .its('headers')
        //     .its('content-type')
        //     .should('deep.eq', todos.bodyObjects)
        // })

        // it('Json schema Validation', () => {
        //     cy.get('@requestToDo')
        //     .its('body')
        //     .each($object => {
        //         expect($object).to.have.all.keys(todos.bodyObjects)
        //     })
        // })
    })

    afterEach(() => {
        baseTodoPage.doubleClickLabel().should('be.visible')
        baseTodoPage.allItemList().then($listElement => {
            if($listElement.length >= 3){
                cy.log('tengo ' + $listElement.length)
                for(let i = 3; i > $listElement.length; i++){
                    baseTodoPage.delete3ItemlistCheck().click()
                } 
            }
        })     
    })
})

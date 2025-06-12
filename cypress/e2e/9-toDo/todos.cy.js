import selectorToDoTodo from "../../selector/9-Todo/selectorToDo"
import todos from "../../fixtures/9-ToDo/todos.json"

const baseTodoPage = new selectorToDoTodo 

describe('To Do Test ', () => {

    beforeEach(()=> {
        baseTodoPage.navigationtoDos()
    })

    todos.forEach(todos => {

        it('validate Title', () => {
            baseTodoPage.titleToDo().should('have.css', 'color', 'rgb(184, 63, 69)').and('have.text', 'todos')
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

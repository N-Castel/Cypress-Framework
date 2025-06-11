describe('Api test', () => {

    it('Endpoint POST response with 200', () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts'}).then( (response) => {
                expect(response.status).to.eq(200)
            })
        })

//Test for GET in a endpoint with 1 object
    it('The endpoint has 100 Post', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');
        //In cy.request its making a GET by default, so, we just need to set the endpoint by default
        cy.request('/posts')
        .its('body')
        .should('have.length', 100)
    })

    it('The endpoint porperty has as title "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.request('/posts/1')
        .its('body')
        .should('have.a.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    it('The POST works as expected', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/', {
            userId: 1,
            id: 101,
            title: 'Test for API',
            body: 'Test body for my post'        
        }).then((response) => {
            expect(response.body).to.have.property('title', 'Test for API')
        })
    })

//Test for PUT 
    it('The PUT works as expected', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', {
            userId: 1,
            id: 101,
            title: 'Test for API',
            body: 'Test body for my post'        
        }).then((response) => {
            expect(response.body).to.have.property('title', 'Test for API')
        })
    })
    //Test for Delete
    it('Delete request works as expected', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    })
    //Create the variable with the values that we want to set 
    it.only('Simulation fo vaules that we GET calling an endpoint', () => {
        const setPostValues = [
            {
                userId: 1,
                id: 1,
                title: 'Test title for Stub',
                body: 'Test body for stub 1'
            },
            {
                userId: 1,
                id: 1,
                title: 'Test title for Stub 2',
                body: 'Test body for stub 2'
            }
        ]
    //Creation of Stub to simulate the call
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', setPostValues).as('getPost')
    // Visit the website    
        cy.visit('https://jsonplaceholder.typicode.com')
    // Click to go to the endpoint that I need for test
        cy.get('body > div > main table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(2) > a').click();

    // Wait for complete the intercept request
        cy.wait('@getPost');

    //Validate with the data that the tester set 
    cy.get('.post-title').eq(0).should('contain', 'Test title for Stub 1');
    cy.get('.post-content').eq(0).should('contain', 'Test body for stub 1');
    cy.get('.post-title').eq(1).should('contain', 'Test title for Stub 2');
    cy.get('.post-content').eq(1).should('contain', 'Test body for stub 2');
    
    })
})

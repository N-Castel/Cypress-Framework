describe('Validate a title inside of frame', ()=> {

    it('Validate text in frame', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html');
        cy.get('frame')
        .iframe('body #button.find-out-more > b')
        .should('include.text', 'Find Out More!')
    })
})
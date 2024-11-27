
describe('My First Test', () => {
    it('it test3', () => {
        cy.visit("https://portal.kidncode.com/")
        cy.title(should(`eq`,`).kidncode`)
    })
})

describe('Magento', function() {
    it('should login via form submit', function() {
        cy.visit('/')

        cy.wait(4000)
        cy.get('.page-header .header.links > .authorization-link a').click()

        cy.wait(4000)
        cy.get('input[name="login[username]"]').type('roni_cost@example.com')
        cy.get('input[name="login[password]"]').type('roni_cost3@example.com')
        cy.get('button.login').click()

        cy.wait(4000)
        cy.get('.customer-name').should('be.visible')
    })
})
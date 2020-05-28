describe('Test our inputs and submit our form', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000/components/Pizza');
    });
    it('Add test to inputs and submit form', function() {
        cy.get('textarea[name="instructions"]')
            .type('Extra cheese')
            .should("have.value", "Extra cheese");
        cy.get('[type="checkbox"]')
            .check()
            .should('be.checked');
        cy.get('button').click();
    });
});
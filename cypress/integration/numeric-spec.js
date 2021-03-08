it('1 + 2', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-cy=1]').click();
  cy.get('[data-cy=+]').click();
  cy.get('[data-cy=2]').click();
  cy.get('[data-cy=display]').contains('3');
});

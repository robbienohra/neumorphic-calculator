it('click 1', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-cy=1]').click();
  cy.get('[data-cy=display]').contains('1');
});

it('navigate home', () => {
  cy.visit('http://localhost:3000/');
  cy.location('pathname').should('eq', '/');
});

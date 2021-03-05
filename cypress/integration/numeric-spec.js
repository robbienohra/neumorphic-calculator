it('click 1', () => {
  cy.visit('http://localhost:3000/');
  cy.get('#1').click();
});

beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('arithmetic operations', () => {
  it('1 + 2', () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy=display]').contains('3');
  });

  it('2 x 3', () => {
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy=display]').contains('6');
  });

  it('1 -> -1', () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+/-"]').click();
    cy.get('[data-cy=display]').contains('-1');
  });
});

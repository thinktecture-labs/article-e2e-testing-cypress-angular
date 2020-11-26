describe('create new items', () => {

  beforeEach(() => {
    cy.viewport(300, 600);
  });

  it('should create a new item and show it on the home page', () => {
    const expectedTitle = '🚀 test';
    cy.visit('/home');
    cy.get('[data-test=dock-button]').first().click();
    cy.url().should('contain', 'form');
    cy.get('[data-test=title]').type(expectedTitle);
    cy.get('[data-test=save]').click();
    cy.url().should('contain', '/home');
    cy.contains(expectedTitle);
  });

});

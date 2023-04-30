// /// <reference types="cypress" />

describe('check pages', () => {
  it('visit main page', () => {
    cy.visit('/');

    cy.get('input').type('four');
    cy.should('have.value', 'four');
  });

  it('bad query', () => {
    cy.visit('/');

    cy.get('input').type('qwertyuiop');
    cy.get('form').submit();
    cy.contains('Nothing found for your request. Please try again...');
  });

  it('visit about page', () => {
    cy.visit('/about');

    cy.get('h1').should('have.text', 'About Us');
  });

  it('visit form page', () => {
    cy.visit('/form');

    cy.get('form').submit();
    cy.contains('Please consent to proceed');
  });

  it('visit 404 page', () => {
    cy.visit('/404');

    cy.get('h1').should('have.text', 'Page is not found: 404');
  });

  it('the end', () => {
    expect(true).to.equal(true);
  });
});

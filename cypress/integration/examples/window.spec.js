/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://quakpah.cf/login.php')
  })

  it.only('loop', () => {
    // https://on.cypress.io/window
    // cy.window().should('have.property', 'top')
    for (let i = 0; i < 10000; i ++) {
      cy.get('input[name="user"]')
        .type('fake01' + i);
      cy.get('input[name="pass"]')
        .type('anlonnhe');
      cy.get('button[type="submit"]')
        .click();
      cy.wait(1000);
      cy.visit('http://quakpah.cf/login.php')
    }
    

  })
})

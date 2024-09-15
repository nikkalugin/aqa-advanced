/// <reference types="cypress" />

class LogIn {
    open() {
        cy.visit('/', {
            auth: {
                username: Cypress.env('authUser'),
                password: Cypress.env('authPassword')
            }
        });
    }
  
    openLoginForm() {
      cy.get('.header_signin').click();
    }
  
    login() {
      cy.get('#signinEmail').type(Cypress.env('usernameLog'));
      cy.get('#signinPassword').type(Cypress.env('passwordLog'));
      cy.contains('Login').click();
    }
  
    verifyLoginSuccess() {
      cy.contains('You have been successfully logged in').should('be.visible');
    }
}
  
module.exports = new LogIn();
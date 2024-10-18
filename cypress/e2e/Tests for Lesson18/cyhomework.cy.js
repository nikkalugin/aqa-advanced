/// <reference types="cypress" />

describe('Lection 18', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })
  
    it('Find "Sign In" button', () => {
        cy.get('.btn-primary').should('have.text', 'Sign up');
    });

    it('Find all buttons at header', () => {
        cy.get('header').find('button');
    });

    it('Find first and last elements from contacts', () => {
        cy.get('.align-items-md-start a').first();
        cy.get('.align-items-md-start a').last();
    });

    it('Make sure "Register" button is disabled when all fields are empty', () => {
        cy.get('.btn-primary').click();
        cy.get('app-signup-modal').within(($form) => {
            cy.get('.btn-primary').should('be.disabled');
        });
    });

    it('Make sure "Register" button is disabled when Name field is empty', () => {
        cy.get('.btn-primary').click();
        cy.get('app-signup-modal').within(($form) => {
            cy.get('#signupLastName').type('Kaluhin');
            cy.get('#signupEmail').type('test1@test.com');
            cy.get('#signupPassword').type('Qwerty123');
            cy.get('#signupRepeatPassword').type('Qwerty123');
            cy.get('.btn-primary').should('be.disabled');
        });
    });

    it('Make sure that notification is present when passwords are not equal', () => {
        cy.get('.btn-primary').click();
        cy.get('app-signup-modal').contains('Registration');
        cy.get('#signupPassword').type('Qwerty123');
        cy.get('#signupRepeatPassword').type('Qwerty1234');
        cy.get('#signupEmail').click();
        cy.get('.invalid-feedback').contains('Passwords do not match');
    });

    it('Make sure that notification "Email required" is present while filling "Forgot Password" form', () => {
        cy.get('.btn-outline-white').click();
        cy.get('.btn-link').contains('Forgot password').click();
        cy.get('app-forgot-password-modal').within(($form) => {
            cy.get('#signinEmail').type('qweqwe');
            cy.get('.btn-primary').click({force: true});
            cy.get('.invalid-feedback').contains('Email is incorrect');
        });
    });

    it('Find all "a" elements at necessary div', () => {
        cy.get('.align-items-md-end a');
        cy.contains('ithillel.ua');
        cy.contains('support@ithillel.ua');
    });

    it('Find all buttons at page', () => {
        cy.get('button').each(($item) => {
            cy.wrap($item).should('be.visible');
        });
    });
})
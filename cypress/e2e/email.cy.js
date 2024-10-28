/// <reference types="cypress" />

describe('Lection 19, Email', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Email required error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Nikita');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul@gmail.com').clear();
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde99');
        cy.get('.invalid-feedback').should('have.text', 'Email required');
    });

    it('Email is incorrect error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Nikita');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul');
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde99');
        cy.get('.invalid-feedback').should('have.text', 'Email is incorrect');
    });

    it('Border Color is red', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupEmail').type('expeditiontomysoul');
        cy.get('#signupName').type('Nikita');
        cy.get('.is-invalid').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
})
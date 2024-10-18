/// <reference types="cypress" />

describe('Lection 19, Re-enter Password', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Passwords do not match error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde98');
        cy.get('#signupName').type('Nikita');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul@gmail.com');
        cy.get('.invalid-feedback').should('have.text', 'Passwords do not match');
    });

    it('Re-enter password required error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde99').clear();
        cy.get('#signupName').type('Nikita');
        cy.get('.invalid-feedback').should('have.text', 'Re-enter password required');
    });

    it.only('Border Color is red', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde98');
        cy.get('#signupName').type('Nikita');
        cy.get('.is-invalid').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
})
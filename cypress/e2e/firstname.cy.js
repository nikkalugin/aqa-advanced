/// <reference types="cypress" />

describe('Lection 19, First Name', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Name is required error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Nikita').clear();
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul@gmail.com');
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde99');
        cy.get('.invalid-feedback').should('have.text', 'Name required');
    });

    it('Name is invalid error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('123');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul@gmail.com');
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde99');
        cy.get('.invalid-feedback').should('have.text', 'Name is invalid');
    });

    it('Name has to be from 2 to 20 characters long error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Wolfeschlegelsteinhausenbergerdorff');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul@gmail.com');
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde99');
        cy.get('.invalid-feedback').should('have.text', 'Name has to be from 2 to 20 characters long');
    });

    it('Border Color is red', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('123');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('.is-invalid').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
})
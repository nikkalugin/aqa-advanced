/// <reference types="cypress" />

describe('Lection 19, Register', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Register button is disabled', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Nikita');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul+testuser1@gmail.com');
        cy.get('#signupPassword').type('For_The_Horde99');
        cy.get('#signupRepeatPassword').type('For_The_Horde98');
        cy.contains('Register').should('be.disabled');
    });

    it('Registration is successfully done', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Nikita');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul+testuser2@gmail.com');
        cy.get('#signupPassword').type('For_The_Horde99', { sensitive: true });
        cy.get('#signupRepeatPassword').type('For_The_Horde99', { sensitive: true });
        cy.contains('Register').click();
        cy.contains('Registration complete').should('be.visible');
    });

    it.only('Registration User already exist error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Nikita');
        cy.get('#signupLastName').type('Kaluhin');
        cy.get('#signupEmail').type('expeditiontomysoul+testuser1@gmail.com');
        cy.get('#signupPassword').type('For_The_Horde99', { sensitive: true });
        cy.get('#signupRepeatPassword').type('For_The_Horde99', { sensitive: true });
        cy.contains('Register').click();
        cy.get('.alert-danger').should('have.text', 'User already exists');
    });
})
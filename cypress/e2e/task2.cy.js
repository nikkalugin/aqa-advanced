/// <reference types="cypress" />

describe('Завдання 2', () => {
    it('Change the name', () => {
        const body = {
            "status": "ok",
            "data": {
                "userId": 151202,
                "photoFilename": "default-user.png",
                "name": "Polar",
                "lastName": "Bear"
            }
        }

        cy.intercept('GET', '/api/users/profile', body).as('changeName');
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        cy.get('.header_signin').click();
        cy.get('#signinEmail').type('expeditiontomysoul+testuser3@gmail.com');
        cy.get('#signinPassword').type('For_The_Horde99');
        cy.contains('Login').click();
        cy.contains('You have been successfully logged in').should('be.visible');
        cy.get('.icon-profile').click();
        cy.wait('@changeName');
        cy.get('.profile_name').should('have.text', 'Polar Bear');
    })
})
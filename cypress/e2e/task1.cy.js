/// <reference types="cypress" />

describe('Завдання 1', () => {
    const credentials = {
        email: "expeditiontomysoul+testuser3@gmail.com",
        password: "For_The_Horde99"
    };

    const carInfo = {
        "carBrandId": 1,
        "carModelId": 1,
        "mileage": 122
    };

    let cookiesValue;

    const userProfile = {
        "photo": "user-1621352948859.jpg",
        "name": "John",
        "lastName": "Dou",
        "dateBirth": "2021-03-17T15:21:05.000Z",
        "country": "Ukraine"
    };

    beforeEach(() => {
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
    })

    it('GET "Gets current user cars"', () => {
        cy.request('GET', '/api/cars').then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
        });
    });

    it('GET "Gets car brands"', () => {
        cy.request('GET', '/api/cars/brands').then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.eq(5);
        });
    });

    it('GET "Gets car models"', () => {
        cy.request('GET', '/api/cars/models').then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.eq(23);
        });
    });

    it('GET "Gets all expenses"', () => {
        cy.request('GET', '/api/expenses?carId=5&page=1').then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body.currentPage).to.eq(1);
        });
    });

    it('POST "Creates new car"', () => {
        cy.request({method: 'POST', url: '/api/cars', body: carInfo, headers: {'Cookie': cookiesValue}, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(201);
            expect(response.body.data.brand).to.eq('Audi');
        });
    });

    it('PUT "Edits user profile"', () => {
        cy.request({method: 'PUT', url: `/api/users/profile`, body: userProfile, headers: {'Cookie': cookiesValue}, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body.data.userId).to.eq(140627);
            expect(response.body.data.country).to.eq('Ukraine');
        });
    });

    it('POST "Registers users in the system"', () => {
        cy.request({method: 'POST', url: '/api/auth/signin', body: credentials, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body.data.userId).to.eq(140627);
            expect(response.body.data.currency).to.eq('usd');
        });
    });

    it('PUT "Changes user email"', () => {
        cy.request({method: 'PUT', url: `/api/users/email`, body: credentials, headers: {'Cookie': cookiesValue}, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
        });
    });

    it.only('DELETE "Deletes existing car"', () => {
        cy.request({method: 'DELETE', url: `/api/cars/1`, body: carInfo, headers: {'Cookie': cookiesValue}, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
        });
    });

    it('DELETE "Delete user account"', () => {
        cy.request('DELETE', '/api/users').then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
        });
    });
})
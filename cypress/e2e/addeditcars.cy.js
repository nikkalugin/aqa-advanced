/// <reference types="cypress" />

import AddCar from "../page-objects/AddCar";
import AddExpense from "../page-objects/AddExpense";
import LogIn from "../page-objects/LogIn";

describe('Lection 20 Homework', () => {
    beforeEach(() => {
        LogIn.open();
        LogIn.openLoginForm();
        LogIn.login();
        LogIn.verifyLoginSuccess();
    })

    it('Add car to Garage', () => {
        AddCar.openAddCarModal();
        AddCar.addCar('Porsche', 'Cayenne', '600');
    });

    it('Add fuel expenses to created car', () => {
        AddExpense.openAddExpenseModal();
        AddExpense.addFuelExpense('800', '350', '60 000'); 
    });
})
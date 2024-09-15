/// <reference types="cypress" />

class AddExpense {
    openAddExpenseModal() {
      cy.get('.btn-success').first().click();
    }
  
    addFuelExpense(mileage, liters, totalCost) {
      cy.get('#addExpenseDate').click();
      cy.get('#addExpenseMileage').clear().type(mileage);
      cy.get('#addExpenseLiters').type(liters);
      cy.get('#addExpenseTotalCost').type(totalCost);
      cy.get('app-add-expense-modal .btn-primary').click();
    }
}
  
module.exports = new AddExpense();
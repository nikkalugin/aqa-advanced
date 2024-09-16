/// <reference types="cypress" />

class AddExpensePage {
    get openAddExpenseModal() {
      return cy.get('.btn-success');
    }
  
    get addExpenseDate() {
      return cy.get('#addExpenseDate');
    }

    get addExpenseMileage() {
      return cy.get('#addExpenseMileage');
    }
    
    get addExpenseLiters() {
      return cy.get('#addExpenseLiters');
    }
    
    get addExpenseTotalCost() {
      return cy.get('#addExpenseTotalCost');
    }
    
    get PressExpenseButton() {
      return cy.get('app-add-expense-modal .btn-primary');
    }
    
    get ExpenseNotification() {
      return cy.contains('Fuel expense added');
    }
    
    FillInAllExpenseData(mileage, liters, totalCost) {
      this.addExpenseMileage.type(mileage);
      this.addExpenseDate.click();
      this.addExpenseLiters.type(liters);
      this.addExpenseTotalCost.type(totalCost);
      this.PressExpenseButton.click();
      this.ExpenseNotification.should('be.visible');
    }
}
  
export default new AddExpensePage();
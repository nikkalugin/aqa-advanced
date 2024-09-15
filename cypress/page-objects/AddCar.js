/// <reference types="cypress" />

class AddCar {
    openAddCarModal() {
      cy.get('.btn-primary').click();
    }
  
    addCar(brand, model, mileage) {
      cy.get('#addCarBrand').select(brand);
      cy.get('#addCarModel').select(model);
      cy.get('#addCarMileage').type(mileage);
      cy.get('app-add-car-modal .btn-primary').click();
    }
}
  
module.exports = new AddCar();
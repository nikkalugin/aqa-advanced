Cypress.Commands.add('login', (username, password) => {
  
    cy.get('#signinEmail').type(username);
    cy.get('#signinPassword').type(password);
    cy.contains('Login').click();
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false;
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      });
    }
  
    return originalFn(element, text, options);
  });
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LogInPage';
import { InventoryPage } from '../page-objects/InventoryPage';

test.describe('Login page tests', () => {
  let loginPage: LoginPage;
  test.beforeEach(async ( {page} ) =>{
    loginPage = new LoginPage(page);
    await loginPage.open();
  })
  test('Username is required error', async () => {
    await loginPage.triggerErrorBecauseOfEmptyUsernameField('secret_sauce');
    await loginPage.verifyErrorNotification('Epic sadface: Username is required');
  })

  test('Password is required error', async () => {
    await loginPage.triggerErrorBecauseOfEmptyPasswordField('standard_user');
    await loginPage.verifyErrorNotification('Epic sadface: Password is required');
  })

  test('All fields are empty error', async () => {
    await loginPage.triggerErrorBecauseAllValuesAreDoNotMatch('qweqwe', 'qweqwe');
    await loginPage.verifyErrorNotification('Epic sadface: Username and password do not match any user in this service');
  })

  test('Successful login', async () => {
    await loginPage.openInventoryPage('standard_user', 'secret_sauce');
  })

  test('Login by using locked user', async () => {
    await loginPage.triggerErrorBecauseUserIsLocked('locked_out_user', 'secret_sauce');
    await loginPage.verifyErrorNotification('Epic sadface: Sorry, this user has been locked out.');
  })
})

test.describe('Inventory page tests', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    test.beforeEach(async ( {page} ) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        await loginPage.open();
        await loginPage.openInventoryPage('standard_user', 'secret_sauce');
    })

    test('Buy Products test', async () => {
      await inventoryPage.selectProducts();
      await inventoryPage.clickOnCartButton();
      await inventoryPage.fillInPersonalInformation('Nikita', 'Kaluhin', '61204');
      await inventoryPage.clickFinishButton();
      await inventoryPage.verifyTextHeading('Thank you for your order!');
    })

    test('First Name is required error', async () => {
      await inventoryPage.clickOnCartButton();
      await inventoryPage.fillInPersonalInformation('', '', '');
      await inventoryPage.verifyNotification('Error: First Name is required');
    })

    test('Last Name is required error', async () => {
      await inventoryPage.clickOnCartButton();
      await inventoryPage.fillInPersonalInformation('Nikita', '', '');
      await inventoryPage.verifyNotification('Error: Last Name is required');
    })

    test('Postal Code is required error', async () => {
      await inventoryPage.clickOnCartButton();
      await inventoryPage.fillInPersonalInformation('Nikita', 'Kaluhin', '');
      await inventoryPage.verifyNotification('Error: Postal Code is required');
    })

    test('Buy Products with removing some of them test', async () => {
      await inventoryPage.selectProducts();
      await inventoryPage.clickOnCartButton();
      await inventoryPage.removeItems();
      await inventoryPage.fillInPersonalInformation('Nikita', 'Kaluhin', '61204');
      await inventoryPage.clickFinishButton();
      await inventoryPage.verifyTextHeading('Thank you for your order!');
    })
})
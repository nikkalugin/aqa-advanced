import { test as base } from '@playwright/test';
import { GaragePage } from '../../page-objects/pages/GaragePage';

type MyFixtures = {
    garagePageWithEditing: GaragePage;
};

export const test = base.extend<MyFixtures>({
    garagePageWithEditing: async ({ browser }, use) => {
        const context = await browser.newContext({ 
            storageState: 'test-data/states/mainUserState.json' 
        });
        const page = await context.newPage();
        const garagePage = new GaragePage(page);
        await garagePage.open();
        await use(garagePage);
        await page.locator('.icon-edit').first().click();
        await page.locator('#addCarBrand').selectOption('Ford');
        await page.locator('#addCarModel').selectOption('Mondeo');
        await page.locator('#addCarMileage').clear();
        await page.locator('#addCarMileage').fill('200');
        await page.getByText('Save').click();
    }
})
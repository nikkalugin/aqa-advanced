import { test as base } from '@playwright/test';
import { HomePage } from '../../page-objects/pages/HomePage';
import { SignInForm } from '../../page-objects/components/forms/SignInForm';
import { GaragePage } from '../../page-objects/pages/GaragePage';
import { Page } from '@playwright/test';

type MyFixtures = {
    garagePageWithEditing: GaragePage;
    signInForm: SignInForm;
    pageSmall: Page;
};

export const test = base.extend<MyFixtures>({
    garagePageWithEditing: async ({ page }, use) => {
        let garagePage = new GaragePage(page);
        test.use({ storageState: 'test-data/states/mainUserState.json' });
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
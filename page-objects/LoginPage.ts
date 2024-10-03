import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async open() {
        await this.page.goto('');
    }

    async triggerErrorBecauseAllValuesAreDoNotMatch(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async triggerErrorBecauseOfEmptyUsernameField(password: string) {
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async triggerErrorBecauseOfEmptyPasswordField(username: string) {
        await this.usernameField.fill(username);
        await this.loginButton.click();
    }

    async openInventoryPage(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await expect(this.page.getByText('Swag Labs')).toBeVisible();
    }

    async verifyErrorNotification(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    async triggerErrorBecauseUserIsLocked(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
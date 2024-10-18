import { expect, Locator, Page } from "@playwright/test";

export class SignUpForm {
    readonly page: Page;
    readonly form: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly repeatPasswordField: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.form = page.locator('.modal-content');
        this.firstNameField = page.locator('#signupName');
        this.lastNameField = page.locator('#signupLastName');
        this.emailField = page.locator('#signupEmail');
        this.passwordField = page.locator('#signupPassword');
        this.repeatPasswordField = page.locator('#signupRepeatPassword');
        this.registerButton = this.form.locator('.btn-primary');
    }

    async triggerErrorOnFirstNameField() {
        await this.firstNameField.focus();
        await this.firstNameField.blur();
    }

    async enterValueAndTriggerErrorOnFirstNameField(firstname: string) {
        await this.firstNameField.fill(firstname);
        await this.firstNameField.blur();
    }

    async verifyBorderColorRedAtFirstNameField() {
        await expect(this.firstNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }

    async triggerErrorOnLastNameField() {
        await this.lastNameField.focus();
        await this.lastNameField.blur();
    }

    async enterValueAndTriggerErrorOnLastNameField(lastname: string) {
        await this.lastNameField.fill(lastname);
        await this.lastNameField.blur();
    }

    async verifyBorderColorRedAtLastNameField() {
        await expect(this.lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }

    async triggerErrorOnEmailField() {
        await this.emailField.focus();
        await this.emailField.blur();
    }

    async enterValueAndTriggerErrorOnEmailField(email: string) {
        await this.emailField.fill(email);
        await this.emailField.blur();
    }

    async verifyBorderColorRedAtEmailField() {
        await expect(this.emailField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }

    async triggerErrorOnPasswordField() {
        await this.passwordField.focus();
        await this.passwordField.blur();
    }

    async enterValueAndTriggerErrorOnPasswordField(password: string) {
        await this.passwordField.fill(password);
        await this.passwordField.blur();
    }

    async verifyBorderColorRedAtPasswordField() {
        await expect(this.passwordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }

    async triggerErrorOnRepeatPasswordField() {
        await this.repeatPasswordField.focus();
        await this.repeatPasswordField.blur();
    }

    async enterValuesAndTriggerErrorOnRepeatPasswordField(password: string, repeatpassword: string) {
        await this.passwordField.fill(password);
        await this.repeatPasswordField.fill(repeatpassword);
        await this.repeatPasswordField.blur();
    }

    async verifyBorderColorRedAtRepeatPasswordField() {
        await expect(this.repeatPasswordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }

    async verifyErrorText(text: string) {
        await expect(this.form.getByText(text)).toBeVisible();
    }

    async fillInRegisterForm(firstname: string, lastname: string, email: string, password: string, repeatpassword: string) {
        await this.firstNameField.fill(firstname);
        await this.lastNameField.fill(lastname);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.repeatPasswordField.fill(repeatpassword);
    }

    async verifyDisabledButton() {
        await expect(this.registerButton).toBeDisabled();
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async verifyNotification(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }
}
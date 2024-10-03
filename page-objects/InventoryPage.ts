import { Locator, Page, expect } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly addToCartBackpack: Locator;
    readonly addToCartBike: Locator;
    readonly addToCartTshirt: Locator;
    readonly addToCartJacket: Locator;
    readonly addToCartOnesie: Locator;
    readonly addToCartRedTshirt: Locator;
    readonly removeBackpack: Locator;
    readonly removeBike: Locator;
    readonly removeOnesie: Locator;
    readonly cartButton: Locator;
    readonly checkoutButton: Locator;
    readonly firstnameField: Locator;
    readonly lastnameField: Locator;
    readonly postalCodeField: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addToCartBike = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.addToCartTshirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.addToCartJacket = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.addToCartOnesie = page.locator('#add-to-cart-sauce-labs-onesie');
        this.addToCartRedTshirt = page.locator('#add-to-cart-test.allthethings()-t-shirt-(red)');
        this.removeBackpack = page.locator('#remove-sauce-labs-backpack');
        this.removeBike = page.locator('#remove-sauce-labs-bike-light');
        this.removeOnesie = page.locator('#remove-sauce-labs-onesie');
        this.cartButton = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('#checkout');
        this.firstnameField = page.locator('#first-name');
        this.lastnameField = page.locator('#last-name');
        this.postalCodeField = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
    }

    async selectProducts() {
        await this.addToCartBackpack.click();
        await this.addToCartBike.click();
        await this.addToCartTshirt.click();
        await this.addToCartJacket.click();
        await this.addToCartOnesie.click();
    }

    async clickOnCartButton() {
        await this.cartButton.click();
    }

    async fillInPersonalInformation(firstname: string, lastname: string, postalcode: string) {
        await this.checkoutButton.click();
        await this.firstnameField.fill(firstname);
        await this.lastnameField.fill(lastname);
        await this.postalCodeField.fill(postalcode);
        await this.continueButton.click();
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }

    async verifyTextHeading(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    async verifyNotification(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    async removeItems() {
        await this.removeBackpack.click();
        await this.removeBike.click();
        await this.removeOnesie.click();
    }
}
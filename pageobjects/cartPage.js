const { expect } = require('@playwright/test');
class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('#cart_checkout1')

        this.guestCheckoutOption = page.locator('#accountFrm_accountguest')
        this.continueCheckoutButton = page.locator('[title="Continue"]')
    }
    async checkoutAsGuest(){
        await this.checkoutButton.click()
        await this.guestCheckoutOption.click()
        await this.continueCheckoutButton.click()
    }
}
module.exports = { CartPage };
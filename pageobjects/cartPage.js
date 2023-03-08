const { expect } = require('@playwright/test');
class CartPage {
    constructor(page) {
        this.page = page;
        this.topCartTotalPrice = page.locator('.hover .cart_total')
        this.topCartTotalQuantity = page.locator('.block_7 [class="label label-orange font14"]')
        this.cartAllProductsQuantity = page.locator('tbody .align_center .input-group input')
        this.checkoutButton = page.locator('#cart_checkout1')
        this.guestCheckoutOption = page.locator('#accountFrm_accountguest')
        this.continueCheckoutButton = page.locator('[title="Continue"]')
        this.totalsTableElements = this.page.locator('#totals_table td')
    }
    async topCartIsEmpty() {
        await expect(this.topCartTotalPrice).toContainText('0.00')
        await expect(this.topCartTotalQuantity).toContainText('0')
    }
    async topCartIsNotEmpty() {
        expect(await this.topCartTotalPrice).not.toContain('0.00')
        expect(await this.topCartTotalQuantity).not.toContain('0')
    }
    async priceInCardMatchPriceInTopCard() {
        const subtotalPrice = await (this.totalsTableElements).nth(1).textContent()
        await expect(this.topCartTotalPrice).toHaveText(subtotalPrice)
    }
    async checkoutAsGuest() {
        await this.checkoutButton.click()
        await this.guestCheckoutOption.click()
        await this.continueCheckoutButton.click()
    }
    async quantityOfAllProductsInCardMatchQuantityInTopCard() {
        let counter = 0
        const productsCounter = await this.cartAllProductsQuantity.count()
        for (let i = 0; i < productsCounter; ++i) {
            const value = await this.cartAllProductsQuantity.nth(i).getAttribute('value')
            counter = counter + parseInt(value)
        }
        counter = counter.toString()
        await expect(this.topCartTotalQuantity).toContainText(counter)
    }
}
module.exports = { CartPage };
const { expect } = require('@playwright/test');
class MainPage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('#filter_keyword')
        this.searchButton = page.locator('.button-in-search')
        this.menu = page.locator('#categorymenu')
        this.cartIcon = page.locator('[class="fa fa-cart-plus fa-fw"]')
        this.addToCartButton = page.locator('.cart')
        this.allProductsOnPage = page.locator('[class="col-md-3 col-sm-6 col-xs-12"]')



    }
    async addProductToCartByUsingSearchBox(product) {
        await this.searchBox.type(product)
        await this.searchButton.click()
        if (await this.page.locator('#sort').count() > 0) {
            await this.cartIcon.nth(0).click()
        }
        await this.addToCartButton.click()
    }
    async addTshirtToCart(productName) {
        await this.menu.locator('text=  Apparel & accessories').nth(0).hover()
        await this.page.locator('text =    T-shirts').nth(0).click()
        const count = await this.allProductsOnPage.count()
        for (let i = 0; i < count; ++i) {
            if (await this.allProductsOnPage.nth(i).locator('.prdocutname').textContent() === productName) {
                await this.allProductsOnPage.nth(i).locator('.productcart').click()
                break
            }
        }
        await this.addToCartButton.click()
    }
    async addShoesToCart(productName) {
        await this.menu.locator('text=  Apparel & accessories').nth(0).hover()
        await this.page.locator('text =    Shoes').nth(0).click()
        const count = await this.allProductsOnPage.count()
        for (let i = 0; i < count; ++i) {
            if (await this.allProductsOnPage.nth(i).locator('.prdocutname').textContent() === productName) {
                await this.allProductsOnPage.nth(i).locator('.productcart').click()
                break
            }
        }
        if (productName === 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals') {
            await this.page.locator('#option344747').click()
        }
        await this.addToCartButton.click()
    }

}
module.exports = { MainPage };
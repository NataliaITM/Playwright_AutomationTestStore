const { test } = require('@playwright/test');
const { PageObjectsManager } = require('../pageobjects/pageObjectsManager')

test.describe('The quantity and value of the basket above the menu bar of the website changes', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });
    test('Add one product to cart', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        await cartPage.topCartIsEmpty()
        await mainPage.addProductToCartByUsingSearchBox('lipstic')
        await cartPage.topCartIsNotEmpty()
        await cartPage.priceInCardMatchPriceInTopCard()
        await cartPage.quantityOfAllProductsInCardMatchQuantityInTopCard()
    });
    test('Add multiple product to cart', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        await cartPage.topCartIsEmpty()
        await mainPage.addProductToCartByUsingSearchBox('lipstic')
        await mainPage.addProductToCartByUsingSearchBox('lipstic')
        await mainPage.addShoesToCart('Ruby Shoo Womens Jada T-Bar')
        await cartPage.quantityOfAllProductsInCardMatchQuantityInTopCard()
    });
});
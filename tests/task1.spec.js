const { test } = require('@playwright/test');
const { PageObjectsManager } = require('../pageobjects/pageObjectsManager')

test.describe('Add to card 3 products and order', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });
    test('Happy Path', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addProductToCartByUsingSearchBox('eye')
        await mainPage.addTshirtToCart('Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie')
        await mainPage.addShoesToCart('New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion','London','United Kingdom','Greater London', 'E1 7AY')
        await checkoutForm.confirmOrder()
    });
});
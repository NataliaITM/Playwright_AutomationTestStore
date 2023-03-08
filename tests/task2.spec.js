const { test } = require('@playwright/test');
const { PageObjectsManager } = require('../pageobjects/pageObjectsManager')

test.describe('Address Field Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });
    test('Empty Address field', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addTshirtToCart('Casual 3/4 Sleeve Baseball T-Shirt')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress(null, 'London', 'United Kingdom', 'Greater London', 'E1 7AY')
        await checkoutForm.addressValidationMessage()
    });
    test('Too short Address', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addTshirtToCart('Casual 3/4 Sleeve Baseball T-Shirt')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Ab', 'London', 'United Kingdom', 'Greater London', 'E1 7AY')
        await checkoutForm.addressValidationMessage()
    });
    test('Too long Address', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addTshirtToCart('Casual 3/4 Sleeve Baseball T-Shirt')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu velit, faucibus in turpis ac, aliquet luctus turpis. Lorem ip', 'London', 'United Kingdom', 'Greater London', 'E1 7AY')
        await checkoutForm.addressValidationMessage()
    });
});
test.describe('City Field Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });
    test('Empty City field', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addShoesToCart('Fiorella Purple Peep Toes')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion', null, 'United Kingdom', 'Greater London', 'E1 7AY')
        await checkoutForm.cityValidationMessage()
    });
    test('Too short City', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addShoesToCart('Fiorella Purple Peep Toes')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion', 'Ab', 'United Kingdom', 'Greater London', 'E1 7AY')
        await checkoutForm.cityValidationMessage()
    });
    test('Too long City', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addShoesToCart('Fiorella Purple Peep Toes')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu velit, faucibus in turpis ac, aliquet luctus turpis. Lorem ip', 'United Kingdom', 'Greater London', 'E1 7AY')
        await checkoutForm.cityValidationMessage()
    });
});
test.describe('Country Field Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });
    test('Empty Country field', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addShoesToCart('Ruby Shoo Womens Jada T-Bar')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion', 'London', 'FALSE', null, 'E1 7AY')
        await checkoutForm.countryValidationMessage()
    });
});
test.describe('Region_state Field Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });
    test('Empty Region_state field', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addShoesToCart('Ruby Shoo Womens Jada T-Bar')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion', 'London', 'United Kingdom', null, 'E1 7AY')
        await checkoutForm.region_stateValidationMessage()
    });
});
test.describe('ZIP_postcode Field Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });
    test('Empty ZIP_postcode field', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addShoesToCart('Womens high heel point toe stiletto sandals ankle strap court shoes')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion', 'London', 'United Kingdom', 'Greater London', null)
        await checkoutForm.zip_postecodeValidationMessage()
    });
    test('Too short ZIP_postcode', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addShoesToCart('Womens high heel point toe stiletto sandals ankle strap court shoes')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion', 'London', 'United Kingdom', 'Greater London', 'Ab')
        await checkoutForm.zip_postecodeValidationMessage()
    });
    test('Too long ZIP_postcode', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const mainPage = pageObjectsManager.getMainPage()
        const cartPage = pageObjectsManager.getCartPage()
        const checkoutForm = pageObjectsManager.getCheckoutForm()
        await mainPage.addShoesToCart('Womens high heel point toe stiletto sandals ankle strap court shoes')
        await cartPage.checkoutAsGuest()
        await checkoutForm.formPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
        await checkoutForm.formYourAddress('Whitehaven Mansion', 'London', 'United Kingdom', 'Greater London', 'Lorem ipsum')
        await checkoutForm.zip_postecodeValidationMessage()
    });
});
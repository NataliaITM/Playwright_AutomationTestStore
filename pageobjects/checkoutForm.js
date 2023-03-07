const { expect } = require('@playwright/test');
class CheckoutForm {
    constructor(page) {
        this.page = page
        this.firstNameField = page.locator('#guestFrm_firstname')
        this.lastNameField = page.locator('#guestFrm_lastname')
        this.emailField = page.locator('#guestFrm_email')
        this.adressField = page.locator('#guestFrm_address_1')
        this.cityField = page.locator('#guestFrm_city')
        this.countryField = page.locator('#guestFrm_country_id')
        this.region_stateField = page.locator('#guestFrm_zone_id')
        this.zip_postcodeField = page.locator('#guestFrm_postcode')
        this.submitFormButton = page.locator('#guestFrm button')
        this.confirmOrderButton = page.locator('#checkout_btn')
        this.visibleHelpBlock = page.locator('.help-block:visible')

    }
    async formPersonalDetails(firstName, lastName, email) {
        await this.firstNameField.type(firstName)
        await this.lastNameField.type(lastName)
        await this.emailField.type(email)
    }
    async formYourAddress(address, city, country, region_state, zip_postcode) {
        if (address !== null) await this.adressField.type(address)
        await this.countryField.selectOption(country)
        if (city !== null) await this.cityField.type(city)
        if (region_state !== null) await this.region_stateField.selectOption(region_state)
        if (zip_postcode !== null) await this.zip_postcodeField.type(zip_postcode)
        await this.submitFormButton.click()
    }
    async confirmOrder() {
        await this.confirmOrderButton.click()
        await expect(this.page.locator('.maintext')).toContainText(' Your Order Has Been Processed!')
    }
    async addressValidationMessage() {
        await expect(this.visibleHelpBlock).toContainText('Address 1 must be greater than 3 and less than 128 characters!')
    }
    async cityValidationMessage() {
        await expect(this.visibleHelpBlock).toContainText('City must be greater than 3 and less than 128 characters!')
    }
    async region_stateValidationMessage() {
        await expect(this.visibleHelpBlock).toContainText('Please select a region / state!')
    }
    async zip_postecodeValidationMessage() {
        await expect(this.visibleHelpBlock).toContainText('Zip/postal code must be between 3 and 10 characters!')
    }
    async countryValidationMessage() {
        await expect(this.visibleHelpBlock).toContainText('Please select a country!')
    }
}
module.exports = { CheckoutForm };
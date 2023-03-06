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

    }
    async formPersonalDetails(firstName, lastName, email) {
        await this.firstNameField.type(firstName)
        await this.lastNameField.type(lastName)
        await this.emailField.type(email)
    }
    async formYourAddress(address, city, country, region_state, zip_postcode) {
        if (address !== null) await this.adressField.type(address)
        if (city !== null) await this.cityField.type(city)
        await this.countryField.selectOption(country)
        //statyczny wait do usunięcia! 
        await this.page.waitForTimeout(1000)
        if (region_state !== null) await this.region_stateField.selectOption(region_state)
        if (zip_postcode !== null) await this.zip_postcodeField.type(zip_postcode)
        await this.submitFormButton.click()
    }
    async confirmOrder() {
        await this.confirmOrderButton.click()
        await expect (this.page.locator('.maintext')).toContainText(' Your Order Has Been Processed!')
    }
}
module.exports = { CheckoutForm };
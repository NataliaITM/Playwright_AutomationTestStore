const { MainPage } = require('./mainPage');
const { CartPage } = require('./cartPage');
const { CheckoutForm } = require('./checkoutForm')
class PageObjectsManager {
    constructor(page) {
        this.page = page
        this.mainPage = new MainPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.checkoutForm = new CheckoutForm(this.page)
    }
    getMainPage() {
        return this.mainPage
    }
    getCartPage() {
        return this.cartPage
    }
    getCheckoutForm(){
        return this.checkoutForm
    }
}
module.exports = { PageObjectsManager };
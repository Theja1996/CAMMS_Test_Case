import { ClientFunction, Selector } from 'testcafe';
import LoginPage from './pages/loginPage'
import InventoryPage from './pages/inventory'
import CartPage from './pages/cart'
import CheckOutPage from './pages/checkout'
import CheckOutOverviewPage from './pages/checkOutOverview'

var faker = require('faker');
const getPageTitle = ClientFunction(() => document.title);
const loginpage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkOutPage = new CheckOutPage();
const checkOutOverviewPage = new CheckOutOverviewPage();
const pageURL = 'https://www.saucedemo.com';

const fName = faker.name.firstName();

fixture`Test structure`
    .page(pageURL);

test(`Test saucedemo`, async t => {
    await t // login
        .expect(getPageTitle()).eql('Swag Labs')
        .typeText(loginpage.userName, 'performance_glitch_user')
        .typeText(loginpage.passWord, 'secret_sauce')
        .click(loginpage.login)
    await t // ensure product and price is visible
        .expect(inventoryPage.pageTitle.withText('Products').exists).eql(false)
        .expect(inventoryPage.productName.withText('Sauce Labs Fleece Jacket').visible).ok()
        .expect(inventoryPage.productPrice.withText('49.99').visible).ok()
    await t //Add products into the cart
        .click(inventoryPage.item_1)
        .click(inventoryPage.item_2)
        .click(inventoryPage.cartIcon)
    await t //Verify the selected items are in the cart
        .expect(cartPage.pageTitle.withText('Your Cart').exists).eql(false)
        .expect(cartPage.verifyItemInCart.withText('Sauce Labs Backpack').visible).ok()
        .expect(cartPage.verifyItemInCart.withText('Sauce Labs Bike Light').visible).ok()
        .click(cartPage.CheckOut)
    await t //done checkout 
        .expect(checkOutPage.pageTitle.withText('Checkout: Your Information').exists).eql(false)
        .typeText(checkOutPage.firstName, fName)
        .typeText(checkOutPage.lastName, faker.name.lastName())
        .typeText(checkOutPage.postalCode, faker.random.alphaNumeric())
        .click(checkOutPage.continueBtn)
    await t //get checkOut Overview 
        .expect(checkOutOverviewPage.pageTitle.withText('Checkout: Overview').exists).eql(false)
        .click(checkOutOverviewPage.finish)

});




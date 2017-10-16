import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToShop() {
    return browser.get('/shopping/shop');
  }

  navigateToProduct(id) {
    return browser.get(`/shopping/product/${id}`);
  }

  navigateToCheckoutForm() {
    return browser.get(`/buy/checkout`);
  }

  getProductsContainer() {
    return element(by.className('productContainer'));
  }

  getFirstViewProductButton() {
    return element(by.css('button'));
  }

  getFirstProductContainer() {
    return element(by.className('productItem'));
  }

  getProductBuyButton() {
    return element(by.css('button'));
  }

  getCartCounter() {
    return element(by.id('cartCounter'));
  }


  // Checkout Page
  getNameInput() {
    return element(by.css('input[name="name"]'));
  }
  getNameErrorMessage() {
    return element(by.id('nameErrorMessage'));
  }

  getLastNameInput() {
    return element(by.css('input[name="lastName"]'));
  }
  getEmailInput() {
    return element(by.css('input[name="email"]'));
  }
  getMaleInput() {
    return element(by.css('#male'));
  }
  getAddressInput() {
    return element(by.css('input[name="address"]'));
  }
  getZipCodeInput() {
    return element(by.css('input[name="zipCode"]'));
  }
  getCheckoutBuyButton() {
    return element(by.css('button'));
  }
}

import {AppPage} from './app.po';
import {browser} from 'protractor';
import {Key} from 'selenium-webdriver';

describe('velocity App', () => {
  let page: AppPage;
  let randomProductUrl;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Products container', () => {
    page.navigateToShop();
    expect(page.getProductsContainer().isPresent());
  });

  it('should view a Products', () => {
    page.navigateToShop();
    const firstProductContainer = page.getFirstProductContainer();
    const viewButton = page.getFirstViewProductButton();
    expect(viewButton.isPresent());
    expect(viewButton.getText()).toEqual('View');
    viewButton.click();
    expect(browser.getCurrentUrl()).toContain('/shopping/product');
    browser.getCurrentUrl()
      .then(url => randomProductUrl = url);
  });

  it('should Buy a Products', () => {
    browser.get(randomProductUrl);
    const buyButton = page.getProductBuyButton();
    expect(buyButton.isPresent());
    expect(buyButton.getText()).toEqual('Buy');
    buyButton.click();
    const cartCounter = page.getCartCounter();
    expect(cartCounter.getText()).toEqual('1');
  });

  it('should show name error message ONLY on touched', () => {
    page.navigateToCheckoutForm();
    const nameInput = page.getNameInput();
    const nameErrorMessage = page.getNameErrorMessage()
    expect(nameErrorMessage.isPresent()).toEqual(false);
    nameInput.click();
    expect(nameErrorMessage.isPresent()).toEqual(false);
    nameInput.sendKeys(Key.TAB);
    expect(nameErrorMessage.isPresent()).toEqual(true);
  });


  it('should complete checkout form', () => {
    page.navigateToCheckoutForm();
    const nameInput = page.getNameInput();
    const lastNameInput = page.getLastNameInput();
    const emailInput = page.getEmailInput();
    const maleInput = page.getMaleInput();
    const addressInput = page.getAddressInput();
    const zipCodeInput = page.getZipCodeInput();
    const butButton = page.getCheckoutBuyButton();

    // Complete Data
    nameInput.sendKeys('Eugenio');
    expect(butButton.getAttribute('disabled')).toEqual('true');
    lastNameInput.sendKeys('Valeiras');
    expect(butButton.getAttribute('disabled')).toEqual('true');
    emailInput.sendKeys('eugenio.valeiras@gmail.com');
    expect(butButton.getAttribute('disabled')).toEqual('true');
    maleInput.click();
    expect(butButton.getAttribute('disabled')).toEqual('true');
    addressInput.sendKeys('My Address 1234');
    expect(butButton.getAttribute('disabled')).toEqual('true');
    zipCodeInput.sendKeys(12349);
    expect(butButton.getAttribute('disabled')).toEqual(null);

    butButton.click();
  });


});

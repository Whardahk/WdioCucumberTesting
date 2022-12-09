import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputFirstName() {
    return $('input[name="customer.firstName"]');
  }

  public get inputLastName() {
    return $('input[name="customer.lastName"]');
  }

  public get inputAddress() {
    return $('input[name="customer.address.street"]');
  }

  public get inputCity() {
    return $('input[name="customer.address.city"]');
  }

  public get inputState() {
    return $('input[name="customer.address.state"]');
  }

  public get inputZipCode() {
    return $('input[name="customer.address.zipCode"]');
  }

  public get inputPhone() {
    return $('input[name="customer.phoneNumber"]');
  }

  public get inputSsn() {
    return $('input[name="customer.ssn"]');
  }

  public get inputUsername() {
    return $('input[name="customer.username"]');
  }

  public get inputPassword() {
    return $('input[name="customer.password"]');
  }

  public get inputConfirm() {
    return $('input[name="repeatedPassword"]');
  }

  public get btnSubmit() {
    return $(
      "#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input"
    );
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to register using fistName, lastName, address, city, state, zipCode, phone, ssn,
   *                        username, password and confirmPassword
   */
  public async register(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phone: string,
    ssn: string,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputAddress.setValue(address);
    await this.inputCity.setValue(city);
    await this.inputState.setValue(state);
    await this.inputZipCode.setValue(zipCode);
    await this.inputPhone.setValue(phone);
    await this.inputSsn.setValue(ssn);

    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.inputConfirm.setValue(confirmPassword);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("register");
  }
}

export default new RegisterPage();

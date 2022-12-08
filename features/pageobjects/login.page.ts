import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $("#loginPanel > form > div:nth-child(2) > input");
  }

  public get inputPassword() {
    return $("#loginPanel > form > div:nth-child(4) > input");
  }

  public get btnSubmit() {
    return $("#loginPanel > form > div:nth-child(5) > input");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("index");
  }
}

export default new LoginPage();

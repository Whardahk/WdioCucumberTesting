import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get welcomeText() {
    return $("#rightPanel > div > div > h1");
  }

  public get errorText() {
    return $("#rightPanel > h1");
  }

  public get logoutBtn() {
    return $("#leftPanel > ul > li:nth-child(8) > a");
  }

  public get registText() {
    return $("#rightPanel > h1");
  }

  public get passwordError() {
    return $("span[id='repeatedPassword.errors']");
  }

  public get usernameExists() {
    return $("span[id='customer.username.errors']");
  }
}

export default new SecurePage();

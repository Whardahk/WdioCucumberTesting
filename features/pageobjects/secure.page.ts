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
}

export default new SecurePage();

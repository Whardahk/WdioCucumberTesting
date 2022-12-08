/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
import { config } from "../../wdio.conf";
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path: string) {
    //return browser.url(`https://the-internet.herokuapp.com/${path}`)
    return browser.url(`${config.baseUrl}/${path}.htm`);
    // return browser.url(`${config.baseUrl}`);
  }
}

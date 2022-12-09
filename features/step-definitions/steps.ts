import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";
import RegisterPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";

const pages = {
  login: LoginPage,
  register: RegisterPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a text saying (.*)$/, async (message) => {
  if (message == "Error!") {
    // invalid username or password
    await expect(SecurePage.errorText).toBeExisting();
    await expect(SecurePage.errorText).toHaveTextContaining(message);
  } else {
    // valid username or password
    await expect(SecurePage.welcomeText).toBeExisting();
    await expect(SecurePage.welcomeText).toHaveTextContaining(message);
    await SecurePage.logoutBtn.click();
  }
});

import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";
import RegisterPage from "../pageobjects/register.page";
import SecurePage from "../pageobjects/secure.page";

const pages = {
  login: LoginPage,
  register: RegisterPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

//LOGIN
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

//REGISTER
When(
  /^I register with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone,
    ssn,
    username,
    password,
    confirmPassword
  ) => {
    await RegisterPage.register(
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phone,
      ssn,
      username,
      password,
      confirmPassword
    );
  }
);

Then(
  /^I should see a text on the Register result saying (.*)$/,
  async (message) => {
    if (message == "Passwords did not match.") {
      // incorrect password and confirmed password
      await expect(SecurePage.passwordError).toBeExisting();
      await expect(SecurePage.passwordError).toHaveTextContaining(message);
      await (await RegisterPage.registBtn).click();
    } else if (message == "This username already exists.") {
      //username already exist
      await expect(SecurePage.usernameExists).toBeExisting();
      await expect(SecurePage.usernameExists).toHaveTextContaining(message);
      await (await RegisterPage.registBtn).click();
    } else {
      // valid data
      await expect(SecurePage.registText).toBeExisting();
      await expect(SecurePage.registText).toHaveTextContaining(message);
      await SecurePage.logoutBtn.click();
    }
  }
);

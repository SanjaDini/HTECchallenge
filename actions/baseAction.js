const { login, dashboard } = require('../test_data/selectors/baseSelectors');

class baseActions {
  login(username, password) {
    $(login.loginForm).isExisting();
    $(login.email).setValue(username);
    $(login.password).setValue(password);
    browser.execute('arguments[0].click();', $(login.submit));
    browser.waitUntil(() => {
      return $(login.dashboard).isExisting();
    });
  }

  clickOnUseCases() {
    expect($(dashboard.useCases)).toBeExisting();
    $(dashboard.useCases).click();
  }

  verifyOpenedPage() {
    $(dashboard.useCaseBody).waitForDisplayed();
    expect(browser).toHaveUrlContaining('use-cases');
  }
}

module.exports = baseActions;

const { login } = require('../test_data/selectors/baseSelectors');
const { loginErrors } = require('../test_data/test_values/textValues');
const { data } = require('../test_data/data/data');

class loginActions {
  clickOnElement(cssSelector) {
    expect($(login[cssSelector])).toBeDisplayed();
    $(login[cssSelector]).click();
    browser.pause(500);
  }

  setFieldValue(cssSelector, value) {
    expect($(login[cssSelector])).toBeDisplayed();
    $(login[cssSelector]).setValue(data[value]);
  }

  expectArrayOfElements() {
    expect($$(login.errorMessage)).toBeElementsArrayOfSize({ eq: 2 });
  }

  expectElementVisibilityAndText(cssSelector, expectedText) {
    expect($(login[cssSelector])).toBeDisplayed();
    expect($(login[cssSelector])).toHaveTextContaining(loginErrors[expectedText]);
  }

  expectExistElementAndUrl() {
    expect(browser).toHaveTextContaining('dashboard');
    expect($(login.dashboard)).toBeExisting();
  }
}

module.exports = loginActions;

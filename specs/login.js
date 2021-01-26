const LoginAction = new (require('../actions/loginActions'))();

describe('Login into QA Sandbox with all empty fields', () => {
  it('Given I can open login page', () =>
    browser.url('/login')
  );
  it('When I click on submit button', () =>
    LoginAction.clickOnElement('submit')
  );
  it('Then I should see Error messages', () =>
    LoginAction.expectArrayOfElements()
  );
});
describe('Login into QA Sandbox with empty Email Address field', () => {
  it('Given I can insert Password field', () =>
    LoginAction.setFieldValue('password', 'password')
  );
  it('When I click on Submit button', () =>
    LoginAction.clickOnElement('submit')
  );
  it('Then I should see error message', () =>
    LoginAction.expectElementVisibilityAndText('errorMessage', 'emailError')
  );
});
describe('Login into QA Sandbox with empty Password field', () => {
  it('Given I can refresh the page in order to clear inserted values', () =>
    browser.refresh()
  );
  it('And I can insert Email field', () =>
    LoginAction.setFieldValue('email', 'username')
  );
  it('When I click on Submit button', () =>
    LoginAction.clickOnElement('submit')
  );
  it('Then I should see error message', () =>
    LoginAction.expectElementVisibilityAndText('errorMessage', 'passwordError')
  );
});
describe('Login with non existing user', () => {
  it('Given I can insert Email field', () =>
    LoginAction.setFieldValue('email', 'dummyEmail')
  );
  it('And I can insert Password field', () =>
    LoginAction.setFieldValue('password', 'dummyPassword')
  );
  it('When I click on Submit button', () =>
    LoginAction.clickOnElement('submit')
  );
  it('Then I should see error message', () =>
    LoginAction.expectElementVisibilityAndText('errorMessage', 'notFound')
  );
});
describe('Login with short password', () => {
  it('Given I can refresh the page in order to clear inserted values', () =>
    browser.refresh()
  );
  it('Given I can insert Email field', () =>
    LoginAction.setFieldValue('email', 'username')
  );
  it('And I can insert Password field', () =>
    LoginAction.setFieldValue('password', 'shortPassword')
  );
  it('When I click on Submit button', () =>
    LoginAction.clickOnElement('submit')
  );
  it('Then I should see error message', () =>
    LoginAction.expectElementVisibilityAndText('errorMessage', 'shortPassword')
  );
});
describe('Login with correct username and password', () => {
  it('Given I can insert Email field', () =>
    LoginAction.setFieldValue('email', 'username')
  );
  it('And I can insert Password field', () =>
    LoginAction.setFieldValue('password', 'password')
  );
  it('When I click on Submit button', () =>
    LoginAction.clickOnElement('submit')
  );
  it('Then I should see error message', () =>
    LoginAction.expectExistElementAndUrl()
  );
});

const baseActions = new (require('../actions/baseAction'))();
const useCasesActions = new (require('../actions/useCasesActions'))();
const { data } = require('../test_data/data/data');
const { newUseCase, useCases } = require('../test_data/selectors/useCasesSelectors');
const { testValue, usesCasesErrors, editFields } = require('../test_data/test_values/textValues');

describe('Login into QA Sandbox', () => {
  it('Given I can successful login and open use case page', () => {
    browser.url('/login');
    baseActions.login(data.username, data.password);
  });
});
describe('Open Use Cases page', () => {
  it('Given from Dashboard I can click on Uses Cases', () =>
    baseActions.clickOnUseCases()
  );
  it('Then Use Cases page successfully opened', () =>
    baseActions.verifyOpenedPage()
  );
});
describe('Test Create Use Cases with all blank fields', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I click on Submit button', () =>
    useCasesActions.clickOnElement(newUseCase, 'submitButton')
  );
  it('Then I should see Error messages', () =>
    useCasesActions.expectArrayOfElements()
  );
});
describe('Test Create Use Cases with empty Title field', () => {
  it('Given I can refresh the page in order to clear inserted values', () =>
    browser.refresh()
  );
  it('And I can insert Description', () =>
    useCasesActions.setFieldValue('description', testValue.description)
  );
  it('And I can insert Expected Result', () =>
    useCasesActions.setFieldValue('expected_result', testValue.expected_result)
  );
  it('And I can insert Use Case Step', () =>
    useCasesActions.setFieldValue('step', testValue.step)
  );
  it('When I click on Submit button', () =>
    useCasesActions.clickOnElement(newUseCase, 'submitButton')
  );
  it('Then I should see Error messages', () =>
    useCasesActions.expectExactText('errorMessages', usesCasesErrors.errorTitle)
  );
});
describe('Test Create Use Cases with empty Expected Result field', () => {
  it('Given I can refresh the page in order to clear inserted values', () =>
    browser.refresh()
  );
  it('And I can insert title', () =>
    useCasesActions.setFieldValue('title', testValue.title)
  );
  it('And I can insert Description', () =>
    useCasesActions.setFieldValue('description', testValue.description)
  );
  it('And I can insert Use Case Step', () =>
    useCasesActions.setFieldValue('step', testValue.step)
  );
  it('When I click on Submit button', () =>
    useCasesActions.clickOnElement(newUseCase, 'submitButton')
  );
  it('Then I should see Error messages', () =>
    useCasesActions.expectExactText('errorMessages', usesCasesErrors.errorExpectedResult)
  );
});
describe('Test Create Use Cases with empty Step field', () => {
  it('Given I can refresh the page in order to clear inserted values', () =>
    browser.refresh()
  );
  it('And I can insert title', () =>
    useCasesActions.setFieldValue('title', testValue.title)
  );
  it('And I can insert Description', () =>
    useCasesActions.setFieldValue('description', testValue.description)
  );
  it('And I can insert Expected Result', () =>
    useCasesActions.setFieldValue('expected_result', testValue.expected_result)
  );
  it('When I click on Submit button', () =>
    useCasesActions.clickOnElement(newUseCase, 'submitButton')
  );
  it('Then I should see Error messages', () =>
    useCasesActions.expectExactText('errorMessages', usesCasesErrors.errorStep)
  );
});
describe('Test Create Use Cases with short Title(less than 5 characters)', () => {
  it('Given I can refresh the page in order to clear inserted values', () =>
    browser.refresh()
  );
  it('And I can insert short title', () =>
    useCasesActions.setFieldValue('title', '1234')
  );
  it('And I can insert Description', () =>
    useCasesActions.setFieldValue('description', testValue.description)
  );
  it('And I can insert Expected Result', () =>
    useCasesActions.setFieldValue('expected_result', testValue.expected_result)
  );
  it('And I can insert Use Case Step', () =>
    useCasesActions.setFieldValue('step', testValue.step)
  );
  it('When I click on Submit button', () =>
    useCasesActions.clickOnElement(newUseCase, 'submitButton')
  );
  it('Then I should see Error messages', () =>
    useCasesActions.expectExactText('errorMessages', usesCasesErrors.shortTitle)
  );
});
describe('Test Create Use Cases with short Expected result(less than 5 characters)', () => {
  it('Given I can refresh the page in order to clear inserted values', () =>
    browser.refresh()
  );
  it('And I can insert title', () =>
    useCasesActions.setFieldValue('title', testValue.title)
  );
  it('And I can insert Description', () =>
    useCasesActions.setFieldValue('description', testValue.description)
  );
  it('And I can insert Expected Result', () =>
    useCasesActions.setFieldValue('expected_result', '1234')
  );
  it('And I can insert Use Case Step', () =>
    useCasesActions.setFieldValue('step', testValue.step)
  );
  it('When I click on Submit button', () =>
    useCasesActions.clickOnElement(newUseCase, 'submitButton')
  );
  it('Then I should see Error messages', () =>
    useCasesActions.expectExactText('errorMessages', usesCasesErrors.shortExpectedResult)
  );
});
describe('Test Create Use Case will all inserted fields', () => {
  it('Given I can insert title', () =>
    useCasesActions.setFieldValue('title', testValue.title)
  );
  it('And I can insert Description', () =>
    useCasesActions.setFieldValue('description', testValue.description)
  );
  it('And I can insert Expected Result', () =>
    useCasesActions.setFieldValue('expected_result', testValue.expected_result)
  );
  it('And I can insert Use Case Step', () =>
    useCasesActions.setFieldValue('step', testValue.step)
  );
  it('When I click on Submit button', () =>
    useCasesActions.clickOnElement(newUseCase, 'submitButton')
  );
  it('Then I should created Use case', () =>
    useCasesActions.confirmPresenceOfUseCases('allUseCases', testValue.title)
  );
});
describe('Open created Use Case and verify that elements are displaying', () => {
  it('Given I can open recently created Use Case', () =>
    useCasesActions.clickOnChosenSport(testValue.title)
  );
  it('Then I should see inserted values', () =>
    useCasesActions.confirmPresenceOfUseCases('allInputFields', testValue.description)
  );
});
describe('Update created Use Case', () => {
  it('Given I can update all fields', () =>
    useCasesActions.updateFields(editFields.editValue)
  );
  it('Then I click on Submit button', () =>
    useCasesActions.clickOnElement(newUseCase, 'submitButton')
  );
});
describe('Delete created Use Case', () => {
  it('Given I can open recently created Use Case', () =>
    useCasesActions.clickOnChosenSport(testValue.editValue)
  );
  it('When I click on delete button', () =>
    useCasesActions.clickOnElement(useCases, 'removeUseCase')
  );
  it('Then I can confirm deletion process', () =>
    useCasesActions.clickOnElement(useCases, 'deleteButton')
  );
});

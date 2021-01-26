const baseActions = new (require('../actions/baseAction'))();
const useCasesActions = new (require('../actions/useCasesActions'))();
const {
  login, openUseCase, allBlankFields, emptyTitle,
  emptyExpectedResultField, emptyUseCaseSteps, readWrittenUseCases,
  updateAllUseCases, deleteAllUseCases, editFields, emptyListUseCases,
  shortTitle, shortExpectedResult, emptyFields, emptyEmailFields, emptyPasswordFields,
  shortPasswordData,
} = require('../test_data/test_values/textValues');
const { data } = require('../test_data/data/data');

describe('Login into QA Sandbox', () => {
  it('Given I can successful login and open use case page', () => {
    browser.url('/login');
    baseActions.login(data.username, data.password);
    baseActions.clickOnUseCases();
    baseActions.verifyOpenedPage();
  });
});
describe('Remove all created Test Cases', () => {
  it('Given I can click each created Test Cases and delete it', () =>
    useCasesActions.deleteAllUseCases()
  );
  it('Then I can see empty Use Case page', () =>
    useCasesActions.expectElementTextContaining('emptyUseCaseList', emptyListUseCases.text)
  );
});
describe('Create use case for login with all empty fields', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(emptyFields.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(emptyFields.values[0])
  );
});
describe('Create use case for login with empty Email Address field', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(emptyEmailFields.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(emptyEmailFields.values[0])
  );
});
describe('Create use case for login with empty Password field', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(emptyPasswordFields.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(emptyPasswordFields.values[0])
  );
});
describe('Create use case for login with short password', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(shortPasswordData.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(shortPasswordData.values[0])
  );
});
describe('Create use case for login with correct credentials', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(login.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(login.values[0])
  );
});
describe('Create use case for Opening Use Case page', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(openUseCase.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(openUseCase.values[0])
  );
});
describe('Create use case with all blank fields', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(allBlankFields.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(allBlankFields.values[0])
  );
});
describe('Create use case with empty Title field', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(emptyTitle.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(emptyTitle.values[0])
  );
});
describe('Create use case with empty Expected Result field', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(emptyExpectedResultField.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(emptyExpectedResultField.values[0])
  );
});
describe('Create use case with empty Use Case Steps field', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(emptyUseCaseSteps.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(emptyUseCaseSteps.values[0])
  );
});
describe('Create use case with short Title(less than 5 characters)', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(shortTitle.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(shortTitle.values[0])
  );
});
describe('Create use case with short Expected Result(less than 5 characters)', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(shortExpectedResult.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(shortExpectedResult.values[0])
  );
});
describe('Create use case to check all written use cases', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(readWrittenUseCases.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(readWrittenUseCases.values[0])
  );
});
describe('Create use case to update all use cases', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(updateAllUseCases.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(updateAllUseCases.values[0])
  );
});
describe('Create use case to delete all use cases', () => {
  it('Given I can click on Create Use Case button', () =>
    useCasesActions.openCreateUseCase()
  );
  it('When I can insert value in all fields', () =>
    useCasesActions.fillAllFieldsWithData(deleteAllUseCases.values)
  );
  it('Then I can click on Submit button and toggle on "Automated?" to Yes', () =>
    useCasesActions.toggleOnAutomationButtonAndClickOnSubmitButton(deleteAllUseCases.values[0])
  );
});
describe('Open each test case and update all fields', () => {
  it('Given I can open each field and update it', () =>
    useCasesActions.updateAllFields(editFields.editValue)
  );
  it('Then list with updated items is displaying', () =>
    useCasesActions.expectElementTextContaining('allUseCases', editFields.editValue)
  );
});
describe('Remove all created Test Cases', () => {
  it('Given I can click each created Test Cases and delete it', () =>
    useCasesActions.deleteAllUseCases()
  );
  it('Then I can see empty Use Case page', () =>
    useCasesActions.expectElementTextContaining('emptyUseCaseList', emptyListUseCases.text)
  );
});

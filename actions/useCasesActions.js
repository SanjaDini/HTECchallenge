const useCasesObjects = new (require('../pageobjects/useCases'))();
const { useCases, newUseCase } = require('../test_data/selectors/useCasesSelectors');

class UseCasesActions {
  deleteAllUseCases() {
    browser.waitUntil(() => {
      return $(useCases.allUseCases).isExisting();
    });

    const allUseCases = $$(useCases.allUseCases);

    useCasesObjects.deleteAllUseCases(
        allUseCases,
        useCases,
        'removeUseCase',
        'deleteButton'
    );
  }

  expectElementTextContaining(cssSelector, data) {
    expect($(useCases[cssSelector])).toHaveTextContaining(data);
  }

  expectExactText(cssSelector, string) {
    expect($(newUseCase[cssSelector])).toHaveText(string);
  }

  setFieldValue(cssSelector, value) {
    expect($(newUseCase[cssSelector])).toBeDisplayed();
    $(newUseCase[cssSelector]).setValue(value);
  }

  expectArrayOfElements() {
    expect($$(newUseCase.errorMessages)).toBeElementsArrayOfSize({ eq: 3 });
  }

  openCreateUseCase() {
    this.clickOnElement(useCases, 'createUseCaseButton');
    expect(browser).toHaveUrlContaining('create-usecase');
  }

  clickOnElement(dataSelector, cssSelector) {
    expect($(dataSelector[cssSelector])).toBeDisplayed();
    $(dataSelector[cssSelector]).click();
    browser.pause(800);
  }

  fillAllFieldsWithData(data) {
    const allFields = $$(newUseCase.allInputFields);
    const missingField = useCasesObjects.fillFieldWithData(allFields, data);

    this.errorReporter(missingField);
  }

  toggleOnAutomationButtonAndClickOnSubmitButton(title) {
    browser.execute('arguments[0].click();', $(newUseCase.switchAutomatedTest));
    this.clickOnElement(newUseCase, 'submitButton');
    expect(browser).toHaveUrl(browser.config.baseUrl + 'use-cases');
    this.confirmPresenceOfUseCases('allUseCases', title);
  }

  updateAllFields(data) {
    const listOfUsesCases = $$(useCases.allUseCases);

    useCasesObjects.updateAllFields(listOfUsesCases, data, newUseCase, 'submitButton');
  }

  updateFields(data) {
    useCasesObjects.getEveryFieldLengthAndSetValue(data);
  }

  clickOnChosenSport(dataValue) {
    const listOfUsesCases = $$(useCases.allUseCases);

    useCasesObjects.clickOnChosenSport(listOfUsesCases, dataValue);
    browser.waitUntil(() => {
      return $(useCases.allInputFields).isExisting();
    });
  }

  confirmPresenceOfUseCases(cssSelector, title) {
    const titles = $$(useCases[cssSelector]);
    const titlesArray = [];

    titles.forEach((title) => {
      const current = title.getText();

      titlesArray.push(current);
    });

    if (!titlesArray.includes(title)) {
      throw new Error(`${title} does not show up in the Use cases list`);
    }
  }

  errorReporter(error) {
    if (0 !== error.length) {
      throw new Error(error);
    }
  }
}

module.exports = UseCasesActions;

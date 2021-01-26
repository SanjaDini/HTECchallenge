const { newUseCase } = require('../test_data/selectors/useCasesSelectors');

class UseCases {
  deleteAllUseCases(useCases, dataSelector, cssSelector1, cssSelector2) {
    useCases.forEach((useCase) => {
      useCase.click();
      $(dataSelector[cssSelector1]).waitForDisplayed();
      $(dataSelector[cssSelector1]).click();
      $(dataSelector[cssSelector2]).click();
    });
  }

  fillFieldWithData(fields, data) {
    const missingField = [];

    fields.forEach((field, index) => {
      try {
        field.setValue(data[index]);
      } catch (e) {
        missingField.push(`Value cannot be set for ${field.getAttribute('name')} field\n`);
      }
    });

    return missingField;
  }

  updateAllFields(listOfUsesCases, data, dataSelector, cssSelector) {
    listOfUsesCases.forEach((useCase) => {
      useCase.click();

      this.getEveryFieldLengthAndSetValue(data);
      $(dataSelector[cssSelector]).click();
    });
  }

  getEveryFieldLengthAndSetValue(data) {
    $(newUseCase.allInputFields).waitForDisplayed();

    const allFields = $$(newUseCase.allInputFields);

    allFields.forEach((field) => {
      const fieldLength = field.getValue().length;

      field.setValue(`${data + fieldLength} characters`);
    });
  }

  clickOnChosenSport(allUseCases, dataValue) {
    let found = false;

    allUseCases.some((useCase) => {
      if (useCase.getText().match(dataValue)) {
        found = true;
        useCase.click();
        $(newUseCase.title).waitForExist();

        return found;
      }
    });

    expect(found).toBeTruthy();
  }
}

module.exports = UseCases;

module.exports.useCases = {
  allInputFields: 'form input, textarea[name=description]',
  allUseCases: 'div.usecases div.list-group > a',
  removeUseCase: 'button[data-testid=remove_usecase_btn]',
  deleteButton: 'div.sweet-alert button.btn-danger',
  emptyUseCaseList: 'div.usecases span:last-child',
  createUseCaseButton: 'div.usecases a[data-testid=create_use_case_btn]',
};

module.exports.newUseCase = {
  allInputFields: 'form input:not(#switch), textarea[name=description]',
  submitButton: 'button[data-testid=submit_btn]',
  switchAutomatedTest: '#switch',
  errorMessages: 'div.invalid-feedback',
  title: 'input[name=title]',
  description: 'textarea[name=description]',
  expected_result: 'input[name=expected_result]',
  step: '#stepId',
};

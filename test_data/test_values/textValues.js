const day = new Date().toISOString().replace(
    /(\d+)-(\d+)-(\d+)T(\d+):(\d+).+/u,
    '$3$2$4$5'
);

module.exports.emptyListUseCases = {
  text: 'Feel free to create your first use case.',
};

module.exports.loginErrors = {
  emailError: 'Email field is required',
  passwordError: 'Password is required',
  notFound: 'User not found',
  shortPassword: 'Password must be at least 6 characters long',
};

module.exports.testValue = {
  title: 'This is a test title ' + day,
  description: 'This is test description',
  expected_result: 'This is test expected result',
  step: 'This is test step',
};

module.exports.usesCasesErrors = {
  errorTitle: 'Title is required',
  errorExpectedResult: 'Expected result is required',
  errorStep: 'There must be at least one test step',
  shortTitle: 'Title needs to be between 5 and 255',
  shortExpectedResult: 'Expected results needs to be between 5 and 255',
};

module.exports.login = {
  values: [
    'Login into QA Sandbox',
    'Test login functionality with correct Username and Password.',
    'Login successful',
    'Enter valid Username, Enter valid Password, Click on Login button',
  ],
};

module.exports.emptyFields = {
  values: [
    'Login into QA Sandbox with all empty fields',
    'Test login functionality with all empty fields.',
    'Login failed',
    'Click on Login button',
  ],
};

module.exports.emptyEmailFields = {
  values: [
    'Login into QA Sandbox with empty Email Address field',
    'Test login functionality with empty Email Address field.',
    'Login failed',
    'Insert Password, Click on Login button',
  ],
};

module.exports.emptyPasswordFields = {
  values: [
    'Login into QA Sandbox with empty Password field',
    'Test login functionality with empty Password field.',
    'Login failed',
    'Insert Email, Click on Login button',
  ],
};

module.exports.shortPasswordData = {
  values: [
    'Login into QA Sandbox with short password',
    'Test login functionality with short password.',
    'Login failed',
    'Insert short password, Click on Login button',
  ],
};

module.exports.openUseCase = {
  values: [
    'Open Use Cases page',
    'Test opening Use Cases page.',
    'Use Cases page successfully opened',
    'Click on Use Cases card',
  ],
};

module.exports.allBlankFields = {
  values: [
    'Create Use Case with all blank fields',
    'Test create Use Case functionality will all blank fields',
    'Create Use Case failed',
    'Click on Create Use Case button, Click on Submit button',
  ],
};

module.exports.emptyTitle = {
  values: [
    'Create Use Case with empty Title field',
    'Test creating Use Case functionality with empty Title field.',
    'Create Use Case failed',
    'Click on Create Use Case button, Insert Description, Insert Expected Result,' +
    ' Insert Use Case Step, Click on Submit button',
  ],
};

module.exports.shortTitle = {
  values: [
    'Create Use Case with short Title',
    'Test creating Use Case functionality with short Title containing less than 5 characters.',
    'Create Use Case failed',
    'Click on Create Use Case button, Insert Title(less than 5 characters), Insert Description,' +
    ' Insert Expected Result, Insert Use Case Step, Click on Submit button',
  ],
};

module.exports.shortExpectedResult = {
  values: [
    'Create Use Case with short Expected result',
    'Test creating Use Case functionality with short Expected result containing less than 5 characters.',
    'Create Use Case failed',
    'Click on Create Use Case button, Insert Title, Insert Description,' +
    ' Insert Expected Result(less than 5 characters), Insert Use Case Step, Click on Submit button',
  ],
};

module.exports.emptyExpectedResultField = {
  values: [
    'Create Use Case with empty Expected Result field',
    'Test creating Use Case functionality with empty Expected Result field.',
    'Create Use Case failed',
    'Click on Create Use Case button,Insert Title,Insert Description,Insert Use Case Step,Click on Submit button',
  ],
};

module.exports.emptyUseCaseSteps = {
  values: [
    'Create Use Case with empty Use Case Steps field',
    'Test creating Use Case functionality with empty Use Case Steps.',
    'Create Use Case failed',
    'Insert Title,Insert Description,Insert Expected Result,Click on Submit button',
  ],
};
module.exports.readWrittenUseCases = {
  values: [
    'Open written Use Cases',
    'Test opening and reading one of created use cases.',
    'Use Case shown',
    'Open Use Cases page, Click on one of already created use cases',
  ],
};

module.exports.updateAllUseCases = {
  values: [
    'Update all Use Cases',
    'Test updating all Use Cases.',
    'Update Use Cases successful',
    'Click on each Use Case,Edit every input field,Save changes',
  ],
};
module.exports.deleteAllUseCases = {
  values: [
    'Delete all Use Cases',
    'Test deleting all Use Cases.',
    'Delete Use Cases successful',
    'Click on each Use Case,Click on Delete icon on the top right side,Click on Delete button on Alert box',
  ],
};

module.exports.editFields = {
  editValue: 'This field previously had ',
};

# HTECchallenge

### Project structure
- `wdio.conf.android`, `wdio.conf.chrome` and `wdio.conf.firefox` holds base configuration. Here is provided basic configuration. The structure of `confing` file can be changed as per requirments

- `actions` - holds the test methods

- `pageobjects` - holds pageobjects

- `specs` - holds test specification written in mocha

- `test_data` - hold JavaScript objects containing data used in writing tests

### Test explantion
- `login` - test login functionality on the QA Sandbox with different  scenarios

- `createUpdateDeleteUseCases` - automate manually written use cases. This test follows the requirements under Test 1(1.1,1.2,1.3,1.4,1.5) delete, create, update, review and delete once again created test cases

- `useCases` - test all previously written scenarios(use case functionalites)

### Use Cases page submited exam
- Exam is submitted  with written tests cases(which are automated under `createUpdateDeleteUseCases`). When you run `createUpdateDeleteUseCases`, automated test will delete all use cases, create it once again, read, update and then delete.

# READ ME

This is a sample project I created to try out the cypress-axe library.

There are two describe statements in the test file: the first one contains a number of tests that are run in the browser. You can see the outcome in the interface but they are not saved. The second describe statement contains also a number of tests and they are also run in the browser. but they are also saved to a file inside _a11y test results_.

Enable and disable tests as needed. The list of pages to run tests on is defined in the beginning of the test file.

## Set up

1. clone the project
2. navigate to the project root directory
3. run `npm install`
   (this will install the cypress-axe library and then peer dependencies)
4. edit the **base url** and the **list of pages to test** in the beginning of the test file.
5. pick which tests to run by commenting out tests in the test file.
6. run it like so: `npx cypress --version` or `npx cypress open`

## Files of note

_e2e/spec.cy.js_ contains a whole number of working calls to cypress-axe that do a number of different things.

_support/commands.js_ contains a couple of helper functions that write test results to files. only run one at a time and comment out the others. these can be adjusted to contain exactly the data that we want in our summary.

## Plugins

added a task to _plugins/cypress.config.js_ that makes it possible to check if a directory exists. this is used to write test results to a file inside a subdirectory (and create this dir if it doesn't exist)

## Note to self: Here is how i originally set up:

```
npm init --y   // initialise empty npm project
npm install cypress-axe --save-dev   // install cypress-axe
npm install cypress axe-core --save-dev // Install peer dependencies
```

Then start cypress test runner which will generate all sorts of example spec test files: `npx cypress open`

update cypress/support/e2e.js file to include the cypress-axe commands by adding:
`import 'cypress-axe'`

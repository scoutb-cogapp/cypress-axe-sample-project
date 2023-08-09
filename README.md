# READ ME

This is a sample project I created to try out the cypress-axe library.

## Set up

Here is how i set up:

```
npm init --y   // initialise empty npm project
npm install cypress-axe --save-dev   // install cypress-axe
npm install cypress axe-core --save-dev // Install peer dependencies
```

Then start cypress test runner which will generate all sorts of example spec test files: `npx cypress open`

update cypress/support/e2e.js file to include the cypress-axe commands by adding:
`import 'cypress-axe'`

## Files of note

e2e/spec.cy.js contains a whole number of working calls to cypress-axe that do a number of different things.

support/commands.js contains a couple of helper functions that write test results to files. only run one at a time and comment out the others. these can be adjusted to contain exactly the data that we want in our summary.

## Plugins

added a task to plugins/cypress.config.js that makes it possible to check if a directory exists. this is used to write test results to a file inside a subdirectory (and create this dir if it doesn't exist)

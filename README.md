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

support/commands.js contains a couple of helper functions that write test results to files.

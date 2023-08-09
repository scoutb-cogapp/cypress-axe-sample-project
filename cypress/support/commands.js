// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Write accessibility test results to a file
Cypress.Commands.add("writeA11yResults", (violations) => {
  cy.writeFile("a11yResults.json", violations, "utf8");
});

// // Write summarised accessibility test results to a file
// Cypress.Commands.add("writeA11ySummary", (violations) => {
//   const summary = violations.reduce((acc, violation) => {
//     acc[`${violation.id} (${violation.impact})`] = violation.nodes.length;
//     return acc;
//   }, {});
//   cy.writeFile("a11ySummary.json", summary, "utf8");
// });

// Write summarised accessibility test results to a file
Cypress.Commands.add("writeA11ySummary", (violations) => {
  const summary = violations.map((violation) => ({
    id: violation.id,
    description: violation.description,
    impact: violation.impact,
    nodes: violation.nodes.length,
  }));

  cy.writeFile("a11ySummary.json", summary);
});

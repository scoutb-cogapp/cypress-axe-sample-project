// describe("Accessibility", () => {
//   it("should run accessibility audits", () => {
//     cy.visit("/");
//     cy.injectAxe();

//     // //check entire page for all accessibility failures:
//     // cy.checkA11y();

//     // //check only the element with id="entry_217838" for all accessibility failures:
//     // cy.checkA11y("#entry_217838 > p");

//     // //check entire page for accessibility failures with Best Practices rules turned off:
//     // cy.checkA11y(null, {
//     //   runOnly: {
//     //     type: "tag",
//     //     values: ["wcag2a", "wcag2aa"],
//     //   },
//     // });

//     // // check entire page for accessibility failures with color-contrast rule turned off:
//     // cy.checkA11y(null, {
//     //   rules: {
//     //     "color-contrast": { enabled: false },
//     //   },
//     // });
//   });
// });

describe("Accessibility", () => {
  it("should write accessibility audit results to file", () => {
    cy.visit("/");
    cy.injectAxe();

    // // check entire page and write to file:
    // cy.checkA11y(null, {}, (violations) => {
    //   cy.writeFile("axe-accessibility-report.json", violations, "utf8");
    // });

    // // check entire page only for color-contrast accessibility failures and write to file:
    // cy.checkA11y(
    //   null,
    //   {
    //     runOnly: {
    //       type: "rule",
    //       value: ["color-contrast"],
    //     },
    //   },
    //   (violations) => {
    //     cy.writeFile("a11yReportColorContrast.json", violations, "utf8");
    //   }
    // );

    // check for a11y issues using a predefined function in ../support/commands.js
    cy.checkA11y(null, {}, cy.writeA11yResults);

    // // check for a11y issues using a predefined summary function in ../support/commands.js
    // cy.checkA11y(null, {}, cy.writeA11ySummary);
  });
});

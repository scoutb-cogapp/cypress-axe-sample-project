// here is the list of pages that the follwoing tests are going to run on:
const test_pages = [
  "https://ecommerce-playground.lambdatest.io/", // homepage
  "https://ecommerce-playground.lambdatest.io/index.php?route=product/product&manufacturer_id=8&product_id=32", // product page
];

// describe("Accessibility tests without report", () => {
//   test_pages.forEach((page) => {
//     it("should run accessibility audits", () => {
//       cy.visit(page);
//       cy.injectAxe();

//       //check entire page for all accessibility failures:
//       cy.checkA11y();

//       // //check only the element with id="entry_217838" for all accessibility failures:
//       // cy.checkA11y("#entry_217838 > p");

//       // //check entire page for accessibility failures with Best Practices rules turned off:
//       // cy.checkA11y(null, {
//       //   runOnly: {
//       //     type: "tag",
//       //     values: ["wcag2a", "wcag2aa"],
//       //   },
//       // });

//       // // check entire page for accessibility failures with color-contrast rule turned off:
//       // cy.checkA11y(null, {
//       //   rules: {
//       //     "color-contrast": { enabled: false },
//       //   },
//       // });
//     });
//   });
// });

describe("Accessibility tests with report generation", () => {
  test_pages.forEach((page) => {
    it("runs axe accessibility checks and writes results to a file", () => {
      cy.visit(page);
      cy.injectAxe();
      cy.checkA11y(null, {}, (violations) => {
        const filename = `axe-accessibility-report-${page}.json`;
        cy.writeFile(filename, violations, "utf8");
      });
    });

    it("runs axe colour contrast tests and writes results to a file", () => {
      cy.visit(page);
      cy.injectAxe();
      cy.checkA11y(
        null,
        {
          runOnly: {
            type: "rule",
            value: ["color-contrast"],
          },
        },
        (violations) => {
          const filename = `a11yReportColorContrast-${page}.json`;
          cy.writeFile(filename, violations, "utf8");
        }
      );
    });

    it("runs axe accessibility tests and writes results to a file using a predefined function in ../support/commands.js", () => {
      cy.visit(page);
      cy.injectAxe();

      // pick one option: write all restulst or a summary:
      // Note: You'll need to modify your custom commands to accept a page parameter and include it in the filename
      cy.checkA11y(null, {}, (violations) => {
        cy.writeA11yResults(violations, page);
      });
      cy.checkA11y(null, {}, (violations) => {
        cy.writeA11ySummary(violations, page);
      });
    });
  });
});

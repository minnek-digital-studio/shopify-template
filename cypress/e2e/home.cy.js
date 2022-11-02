describe("Check homepage", () => {
    before(() => {
        cy.visit("/");
    });

    it("should exist element on header with class ysw-l-header", () => {
        cy.get(".ysw-l-header").should("exist");
    });

    it("should exist element on footer with class ysw-l-footer", () => {
        cy.get(".ysw-l-footer").should("exist");
    });
});

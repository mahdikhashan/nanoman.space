describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="blog"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/blog')

    // The new page should contain an h1 with "All Blog Posts"
    cy.get('h1').contains('All Blog Posts')
  })
})

describe('Homepage', () => {
  it('visits the homepage', () => cy.visit('/'))

  it('should have the title Gatsby Starter Blog', () => {
    cy.visit('/').contains('Gatsby Starter Blog')
  })

  it('should link to twitter', () => {
    cy.visit('/')
      .contains('You should follow him on Twitter')
      .click()
      .url('equal', 'https://twitter.com/kylemathews')
  })
})

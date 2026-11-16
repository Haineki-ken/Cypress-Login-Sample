describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('logs in with a valid user', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
  })

  it('logs out successfully', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('#login-button').should('be.visible')
  })

  it('shows an error for an incorrect password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('shows an error for an empty password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Password is required')
  })

  it('shows an error for an empty username', () => {
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')
  })
})
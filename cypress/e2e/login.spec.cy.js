describe('template spec', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar:'.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert:"[role = 'alert']" 
    
  }


  it('Login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField ).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
 
 it('Login - sucess', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(selectorsList.usernameField).type('Test')
  cy.get(selectorsList.passwordField).type('Test')
  cy.get(selectorsList.loginButton).click()
  cy.get("[role = 'alert']")
  //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
})
})

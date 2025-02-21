describe('template spec', () => {
  it('Login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
 it('Login - sucess', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("[name='username']").type('Test')
  cy.get("[name='password']").type('Test')
  cy.get('.oxd-button').click()
  cy.get("[role = 'alert']")
  //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
})
})

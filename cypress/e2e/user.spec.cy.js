import userData from '../fixtures/userData.json'

describe('template spec', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar:'.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert:"[role = 'alert']" ,
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstName:"[name='firstName']",
    lastName:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton:"[type='submit']"
   
    
  }
 
  it.only('user Info Update - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username) 
    cy.get(selectorsList.passwordField ).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName).clear().type('meunome')
    cy.get(selectorsList.lastName).clear().type('doisnome')
    cy.get(selectorsList.genericField).eq(3).clear().type('Mateus')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherid')
    cy.get(selectorsList.genericField).eq(5).clear().type('dribelisctest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

   // cy.get(selectorsList.genericField).eq().clear().type('Nick')
    //cy.get(selectorsList.genericField).eq(8).clear().type('Nick')
    //cy.get(selectorsList.genericField).eq(7).clear().type('Nick')


   
  })
  
 
 it('Login - Fails', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordField).type(userData.userFail.password)
  cy.get(selectorsList.loginButton).click()
  cy.get("[role = 'alert']")
  //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
})
})

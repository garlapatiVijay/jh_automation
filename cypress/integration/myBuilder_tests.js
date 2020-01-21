/// <reference types="cypress" />

describe('myBuilder', () =>
{
beforeEach(() => 
{
    cy.visit ('https://myhardies.jameshardie.com.au/log-in')
    cy.viewport(2880, 1800)
})  
it('myBuilder Successful login', () =>
{
    cy.get(':nth-child(1) > .jss143 > .jss214 > .jss224').type("the.jim.farrugia@gmail.com")
    cy.get(':nth-child(2) > .jss143 > .jss214 > .jss224').type("qweqwe")
    cy.get('.jss122').click()
    cy.get('.jss365 > .jss85').should('have.text', 'Manage jobs')
    })
it('myBuilder Successful logout', () =>
{
        cy.get(':nth-child(1) > .jss143 > .jss214 > .jss224').type("the.jim.farrugia@gmail.com")
        cy.get(':nth-child(2) > .jss143 > .jss214 > .jss224').type("qweqwe")
        cy.get('.jss122').click()
        cy.get('.jss365 > .jss85').should('have.text', 'Manage jobs')
        cy.get('.jss312.jss316 > .jss82 > .jss321 > .jss314').click()
        cy.get('.jss680').should('have.text','Login')
})
it('Validation of forward password with a non existing account', () =>
{
    cy.get(':nth-child(2) > .jss173').click()
    cy.get('.jss143').type("test01@gmail.com")
    cy.get('.jss289 > .jss257').click()
    cy.get('form > .jss173').should('have.text','The email address you have provided does not exist.')
    })
})
/// <reference types="cypress" />

it('User searches for the product HardiePanel Compressed Sheet from Floors product', () =>{
    cy.visit ('https://www.jameshardie.com.au/')
    cy.get('.jss21').type("Floors{enter}")
    cy.get('#react-autowhatever-1--item-0 > .jss418 > .jss30 > .jss65 > .jss420 > span > strong').click()
    cy.get('.jss216').should('have.text','HardiePanel Compressed Sheet')
    // cy.contains('PRODUCT DETAILS').click({force: true})
    // cy.contains('About us').click({force: true})
})

it('myBuilder Successful login', () =>{
    cy.visit ('https://myhardies.jameshardie.com.au/log-in')
    
})
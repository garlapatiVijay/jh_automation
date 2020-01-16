/// <reference types="cypress" />

describe('Home Page', () =>
{

beforeEach(() => {
        cy.visit ('https://www.jameshardie.com.au/')
      })

it('User searches for the product HardiePanel Compressed Sheet from Floors product', () =>
    {
    cy.get('.jss21').type("Floors{enter}")
    cy.get('#react-autowhatever-1--item-0 > .jss418 > .jss30 > .jss65 > .jss420 > span > strong').click()
    cy.get('.jss216').should('have.text','HardiePanel Compressed Sheet')
    // cy.contains('PRODUCT DETAILS').click({force: true})
    // cy.contains('About us').click({force: true})
    })

    it('User searches for the product HardiePanel Compressed Sheet from Floors product', () =>
    {
    cy.get('.jss21').type("Render{enter}")
    cy.get('#react-autowhatever-1--item-0 > .jss418 > .jss30 > .jss65 > .jss420 > span > strong').click()
    cy.get('.jss216').should('have.text','Stria Cladding')
    // cy.contains('PRODUCT DETAILS').click({force: true})
    // cy.contains('About us').click({force: true})
    })
})

describe('myBuilder', () =>
{
it('myBuilder Successful login', () =>{
    cy.visit ('https://myhardies.jameshardie.com.au/log-in')
    cy.get(':nth-child(1) > .jss143 > .jss214 > .jss224').type("the.jim.farrugia@gmail.com")
    cy.get(':nth-child(2) > .jss143 > .jss214 > .jss224').type("qweqwe")
    cy.get('.jss122').click()
    //cy.get('.jss365 > .jss85').should('have.text', 'Manage jobs')
    // cy.wait(4000)
    // cy.get('.jss312.jss316 > .jss82 > .jss321 > .jss314').click()
    })
})
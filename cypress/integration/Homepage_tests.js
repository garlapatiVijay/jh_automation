/// <reference types="cypress" />

import {navigate, searchButton } from "../page-objects/Homepage"

describe('Home Page', () =>
{
beforeEach(() => 
    {
        navigate()
        cy.viewport(2880, 1800)
      })

it('User search for HARDIEPANEL COMPRESSED SHEET from FLOORS product', () =>
    {
    cy.get('.jss21').type("Floors{enter}")
    searchButton()
    cy.get('.jss216').should('have.text','HardiePanel Compressed Sheet')
    // cy.contains('PRODUCT DETAILS').click({force: true})
    // cy.contains('About us').click({force: true})
    })

it('User search for STRIA CLADDING from RENDERS product', () =>
    {
    cy.get('.jss21').type("Render{enter}")
    searchButton()
    cy.get('.jss216').should('have.text','Stria Cladding')
    // cy.contains('PRODUCT DETAILS').click({force: true})
    // cy.contains('About us').click({force: true})
    })

it('User navigatest to ABOUT US page', () =>
    {
    cy.contains('About us').click({force: true})
    })
})
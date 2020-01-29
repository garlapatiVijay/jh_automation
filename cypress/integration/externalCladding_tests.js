/// <reference types="cypress" />

import {navigate} from "../page-objects/Homepage"

describe('Products-By Category', () =>
{
    beforeEach(() => 
    {
        cy.visit("https://www.jameshardie.com.au/categories/cladding")
        cy.viewport(2880, 1800)
        cy.get('.jss207 > .jss208').contains('external cladding')
      })
it('Validation of AXON CLADDING', () =>
      {
        
        cy.get(':nth-child(1) > .jss260 > .jss208').contains('Axon Cladding').should('be.visible')
        cy.get(':nth-child(1) > .jss260 > .jss208').click()
        cy.get('.jss240 > .jss218').contains('Bring drama and detail to your walls with vertical lines.').should('be.visible')

        //image validation
        //cy.get(':nth-child(1) > .jss259').find('https://static-content-prod.jameshardie-digital.com.au/480x320/product-range_5_images_James-Hardie-Scyon-Axon-Cladding-133mm-Smooth-1000x800.jpg').should('be.visible')
        //cy.get('#sizzle1579824888391').should('be.visible')

        // cy.get('.jss8 > :nth-child(1) > span').trigger('mouseover')
        // cy.get('.jss8 > :nth-child(1) > span').trigger('mouseover')
        // //cy.get('span').contains('Products').trigger('mousemove')
        // // cy.get('.jss8 > :nth-child(1) > span').click()
        // // cy.get('.jss21').type("Floors{enter}")
        // //cy.get('.jss8 > :nth-child(1) > span').contains('Products').trigger('mousemove')
        // //cy.get('.jss8 > :nth-child(1) > span').contains('Products').trigger('mousemove', {clientX: 371, clientY: 41}).click()
        // // cy.get('.jss8 > :nth-child(1) > span').trigger('mouseover', {clientX: 371, clientY: 41})
        // // cy.get('.jss8 > :nth-child(1) > span').trigger('mousemove', {clientX: 371, clientY: 41})
        // // cy.get('.jss8 > :nth-child(1) > span').trigger('mouseenter', {clientX: 371, clientY: 41}
        // // cy.get('.jss8 > :nth-child(1) > span').invoke('trigger', 'mouseover')
        // // cy.get('.jss8 > :nth-child(1) > span').trigger('mouseover')
        // //   cy.get('.jss8 > :nth-child(1)').trigger('mouseover')
        // //   cy.get('.jss8').trigger('mouseover')
      })
      it('Validation of MATRIX CLADDING', () =>
      {
        cy.get(':nth-child(2) > .jss260 > .jss208').contains('Matrix Cladding').should('be.visible')
        cy.get(':nth-child(2) > .jss260 > .jss208').click()
        cy.get('.jss240 > .jss218').contains('Create your own clean contemporary look.').should('be.visible')
      })
      it('Validation of STRIA CLADDING', () =>
      {
        cy.get(':nth-child(3) > .jss260 > .jss208').contains('Stria Cladding').should('be.visible')
        cy.get(':nth-child(3) > .jss260 > .jss208').click()
        cy.get('.jss240 > .jss218').contains('Go Wide. Go Skinny. Go Vertical. Customise Your Look.').should('be.visible')
      })
      it('Validation of EASYLAP CLADDING', () =>
      {
        cy.get(':nth-child(4) > .jss260 > .jss208').contains('EasyLap Panel').should('be.visible')
        cy.get(':nth-child(4) > .jss260 > .jss208').click()
        cy.get('.jss240 > .jss218').contains('A time and cost-effective broadwall solution for external wall applications.')

      })
      // it('Validation of HARDIETEX CLADDING', () =>
      // {
      //   cy.get(':nth-child(5) > .jss260 > .jss208').contains('HardieTex System').should('be.visible')
      //   cy.get(':nth-child(5) > .jss260 > .jss208').click()
      // })

})
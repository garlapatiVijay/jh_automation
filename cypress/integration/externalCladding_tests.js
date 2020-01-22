/// <reference types="cypress" />

import {navigate} from "../page-objects/Homepage"

describe('Products-By Category', () =>
{
    beforeEach(() => 
    {
        navigate()
        cy.viewport(2880, 1800)
      })
it('Validation of EXTERNAL CLADDING', () =>
      {
        //cy.get('span').contains('Products').trigger('mousemove')
        // cy.get('.jss8 > :nth-child(1) > span').click()
        // cy.get('.jss21').type("Floors{enter}")
        cy.get('.jss8 > :nth-child(1) > span').contains('Products').trigger('mousemove')
      })

})
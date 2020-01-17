
export function navigate()
    {
    cy.visit ('https://www.jameshardie.com.au/')
    }
    
export function searchButton()
    {
        cy.get('#react-autowhatever-1--item-0 > .jss418 > .jss30 > .jss65 > .jss420 > span > strong').click()
    }

export class Homepage
{
    navigate ()
    {
    cy.visit ('https://www.jameshardie.com.au/')
    }
    
    searchButton()
    {
        cy.get('#react-autowhatever-1--item-0 > .jss418 > .jss30 > .jss65 > .jss420 > span > strong').click()
    }
}
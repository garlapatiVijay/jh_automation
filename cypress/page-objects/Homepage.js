export function navigate()
{
    cy.visit ('https://www.jameshardie.com.au/')
}
export function searchButton()
{
    cy.get('#react-autowhatever-1--item-0 > .jss418 > .jss30 > .jss65 > .jss420 > span > strong').click()
}
export function searchFloors()
{
    cy.get('.jss21').type("Floors{enter}")
}
export function validationFloorsPage()
{
    cy.get('.jss216').should('have.text','HardiePanel Compressed Sheet')
}
export function searchRender()
{
    cy.get('.jss21').type("Render{enter}")
}
export function validationRenderPage()
{
    cy.get('.jss216').should('have.text','Stria Cladding')
}
export function clickAboutus()
{
    cy.contains('About us').click({force: true})
}
export function validationAboutUsPage()
{
    cy.get('h1').contains('About Us')
}
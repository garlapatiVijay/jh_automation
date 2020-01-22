export function enterValid_email()
{
    cy.get(':nth-child(1) > .jss143 > .jss214 > .jss224').type("the.jim.farrugia@gmail.com")
}
    
export function enterValid_password()
{
    cy.get(':nth-child(2) > .jss143 > .jss214 > .jss224').type("qweqwe")
}
    
export function clickLoginButton()
{
    cy.get('.jss122').click()
}

export function validateLoginSuccessful()
{
    cy.get('.jss365 > .jss85').should('have.text', 'Manage jobs')
}

export function clickLogoutButton()
{
    cy.get('.jss312.jss316 > .jss82 > .jss321 > .jss314').click()
}

export function validateLogoutSuccessful()
{
    cy.get('.jss680').should('have.text','Login')
}

export function clickForgotPassword()
{
    cy.get(':nth-child(2) > .jss173').click()
}

export function enterNoAccountEmail()
{
    cy.get('.jss143').type("test02@gmail.com")
}

export function clickSubmitButton()
{
    cy.get('.jss289 > .jss257').click()
}

export function validationEmailDoesNotExists()
{
    cy.get('form > .jss173').should('have.text','The email address you have provided does not exist.')
}



/// <reference types="cypress" />

import {enterValid_email, enterValid_password, clickLoginButton, validateLoginSuccessful, clickLogoutButton, validateLogoutSuccessful, 
    clickForgotPassword, enterNoAccountEmail, clickSubmitButton, validationEmailDoesNotExists, } from "../page-objects/myBuilder"

describe('myBuilder', () =>
{
beforeEach(() => 
{
    cy.visit ('https://myhardies.jameshardie.com.au/log-in')
    cy.viewport(2880, 1800)
    })  
it('myBuilder Successful login', () =>
{
    enterValid_email()
    enterValid_password()
    clickLoginButton()
    validateLoginSuccessful()
    })
it('myBuilder Successful logout', () =>
{
    enterValid_email()
    enterValid_password()
    clickLoginButton()
    validateLoginSuccessful()
    clickLogoutButton()
    validateLogoutSuccessful()
    })
it('Validation of forward password with a non existing account', () =>
{
    clickForgotPassword()
    enterNoAccountEmail()
    clickSubmitButton()
    validationEmailDoesNotExists()
    })
})
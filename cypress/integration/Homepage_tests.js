/// <reference types="cypress" />

import {navigate, searchButton, searchFloors, validationFloorsPage, searchRender, validationRenderPage, clickAboutus, 
validationAboutUsPage } from "../page-objects/Homepage"

describe('Home Page', () =>
{
beforeEach(() => 
{
    navigate()
    cy.viewport(2880, 1800)
    })
it('User search for HARDIEPANEL COMPRESSED SHEET from FLOORS product', () =>
{
    searchFloors()
    searchButton()
    validationFloorsPage()
    })
it('User search for STRIA CLADDING from RENDERS product', () =>
{
    searchRender()
    searchButton()
    validationRenderPage()
    })
it('User navigatest to ABOUT US page', () =>
{
    clickAboutus()
    validationAboutUsPage()
    })
})
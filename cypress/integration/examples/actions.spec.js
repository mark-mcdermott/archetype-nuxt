import { cy } from 'cypress'
/// <reference types="cypress" />

describe('default nuxt app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('displays correct subtitle', () => {
    cy.get('h2').contains('Welcome to your Nuxt Application')
  })
})

/// <reference types="cypress"/>

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('http://localhost:3000/register');
        // cy.visit: visita uma url.
        
        cy.get('[data-cy=name]').type('Pet dogs');
        cy.get('[data-cy=email]').type('petdogs@mail.com');
        cy.get('[data-cy=whatsapp]').type('62999999999');
        cy.get('[data-cy=city]').type('Anápolis');
        cy.get('[data-cy=uf]').type('GO');
        // cy.get: busca um elemento.
        // .type: insere um texto.

        
        cy.route('POST', '**/ongs').as('postOngs');
        // cy.route: monitora sempre que '/ongs' é chamado.

        cy.get('[data-cy=submit]').click();
        // .click: clica em um elemento.

        cy.wait('@postOngs').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })
    });
    it('Devem poder realizar login', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input').type(Cypress.env('createOngId'));
        cy.get('.button').click();
        });
    });
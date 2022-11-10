/// <reference types="cypress"/>

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('http://localhost:3000/register');
        // cy.visit: visita uma url.
        // .skip ignora esse teste e pula para o proximo.

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
        });
    });
    it('Devem poder realizar login', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=id]').type(Cypress.env('createOngId'));
        cy.get('[data-cy=button-login]').click();
    });
    it('Devem poder realizar logout', () => {
        cy.login();
        cy.get('[data-cy=button-logout]').click();
    });
    it('Devem poder cadastrar novo caso', () => {
        cy.login();
        cy.get('[data-cy=button-new-incident]').click();

        cy.get('[data-cy=title]').type('Animal abandonado');
        cy.get('[data-cy=description]').type('Animal precisa de apoio para ter onde morar.');
        cy.get('[data-cy=value]').type(200);

        cy.route('POST', '**/incidents').as('newIncident');


        cy.get('[data-cy=button-save]').click();

        cy.wait('@newIncident').then((xhr) => {
            expect(xhr.status).to.eq(200)
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })


    });
    it('Devem poder excluir um caso', () => {
        cy.createNewIncident();
        cy.login();

        cy.route('DELETE', '**/incidents/*').as('deleteIncident');

        cy.get('[data-cy=button-delete]').click();

        cy.wait('@deleteIncident').then((xhr) => {
            expect(xhr.status).to.eq(204)
            expect(xhr.response.body).to.be.empty;
        })

    })
});

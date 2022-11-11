// pagina -> ações + elementos

// AÇÕES
// acessar pagina de registro
// preencher cadastro
// validar cadastro

const elements = require('./elements').ELEMENTS

class Register {
    acessarCadastro() {
        cy.visit('http://localhost:3000/register');
        // cy.visit: visita uma url.
        // .skip ignora esse teste e pula para o proximo.  
    }
    preencherCadastro() {
        cy.get(elements.name).type('Pet dogs');
        cy.get(elements.email).type('petdogs@mail.com');
        cy.get(elements.whatsapp).type('62999999999');
        cy.get(elements.city).type('Anápolis');
        cy.get(elements.uf).type('GO');
        // cy.get: busca um elemento.
        // .type: insere um texto.

        cy.route('POST', '**/ongs').as('postOngs');
        // cy.route: monitora sempre que '/ongs' é chamado.

        cy.get(elements.submit).click();
        // .click: clica em um elemento.
    }
    validarCadastroOng() {
        cy.wait('@postOngs').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });
    }
}

export default new Register();
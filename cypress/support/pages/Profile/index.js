// pagina -> ações + elementos

// AÇÕES
// acessar pagina de registro
// preencher cadastro
// validar cadastro

const elements = require('./elements').ELEMENTS

class Profile {
    clicarEmLogout() {
        cy.get(elements.buttonLogout).click();
    }
    cliclarEmCadastrarNovosCasos() {
        cy.get(elements.buttonNewIncident).click();
    }
    clicarEmExcluirCaso() {
        cy.route('DELETE', '**/incidents/*').as('deleteIncident');

        cy.get(elements.buttonDelete).click();
    }
    validarExclusãoDeCaso() {
        cy.wait('@deleteIncident').then((xhr) => {
            expect(xhr.status).to.eq(204)
            expect(xhr.response.body).to.be.empty;
        })
    }

}

export default new Profile();
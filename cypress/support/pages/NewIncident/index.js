const elements = require('./elements').ELEMENTS

class newIncident {
    preencherCadastroNovosCasos(){
        cy.get(elements.title).type('Animal abandonado');
        cy.get(elements.description).type('Animal precisa de apoio para ter onde morar.');
        cy.get(elements.value).type(200);

        cy.route('POST', '**/incidents').as('newIncident');

        cy.get(elements.buttonSave).click();
    }
    validarCadastroNovosCasos(){
        cy.wait('@newIncident').then((xhr) => {
            expect(xhr.status).to.eq(200)
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })
    }
}

export default new newIncident();
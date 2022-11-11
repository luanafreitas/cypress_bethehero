/// <reference types="cypress"/>

import Logon from  '../support/pages/Logon';
import Register from  '../support/pages/Register';
import Profile from  '../support/pages/Profile';
import NewIncident from '../support/pages/NewIncident';

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        Register.acessarCadastro();
        Register.preencherCadastro();
        Register.validarCadastroOng();
    }); 

    it('Devem poder realizar login', () => {
        Logon.acessarLogin();
        Logon.preencherLogin();
    });

    it('Devem poder realizar logout', () => {
        cy.login();
        Profile.clicarEmLogout();
    });

    it('Devem poder cadastrar novo caso', () => {
        cy.login();
        Profile.cliclarEmCadastrarNovosCasos();
        NewIncident.preencherCadastroNovosCasos();
        NewIncident.validarCadastroNovosCasos();
    });
     
    it('Devem poder excluir um caso', () => {
        cy.createNewIncident();
        cy.login();

        Profile.clicarEmExcluirCaso();
        Profile.validarExclusãoDeCaso();
    })
});

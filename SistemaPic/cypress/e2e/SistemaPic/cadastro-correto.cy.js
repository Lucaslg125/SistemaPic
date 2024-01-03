import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {

    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
    })
        
        it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
          
          Cadastro.acessarPaginaDeCadastro();
          Cadastro.preencherFormulario();
          Cadastro.submeterCadastro()
          
        })
    })
  
    
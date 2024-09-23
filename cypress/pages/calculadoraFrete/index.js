import { el } from './elements'

class CalculadoraFrete {

  limparDadosEVisitarPagina() {
    cy.visit('https://web.superfrete.com/',{timeout:20000}, {
      onBeforeLoad(win) {
        cy.clearCookies()
        win.localStorage.clear()
      }
    }).then(() => {
      cy.wait(10000)
    })
  }

  selecionarPeso() {
    cy.get(el.peso).click()
    cy.get(el.cbo300kg).click()
  }

  inserirCepOrigem(cep) {
    cy.get(el.cepOrigem).type(cep)
  }

  inserirCepDestino(cep) {
    cy.get(el.cepDestino).type(cep)
  }

  inserirDimensoes(altura, largura, comprimento) {
    cy.get(el.altura).type(altura)
    cy.get(el.largura).type(largura)
    cy.get(el.comprimento).type(comprimento)
  }

  calcularFrete() {
    cy.get(el.btnCalcular).click()
  }

  validarFrete() {
    cy.get('button').contains('EMITIR FRETE COM DESCONTO').should('be.visible')
  }

  validarDimensoesMaiores() {
    cy.get(el.avisoAlturaInvalida)
  .should('have.text', 'Altura máxima 150 cm.')
    
    cy.get(el.avisoLarguraInvalida)
  .should('have.text', 'Largura máxima 150 cm.')
    
    cy.get(el.avisoComprimentoInvalido)
  .should('have.text', 'Comprimento máximo 150 cm.')
  }

  validarDimensoesMenores() {
    cy.get(el.avisoAlturaInvalida)
  .should('have.text', 'Altura mínima 0.4 cm.')
    
    cy.get(el.avisoLarguraInvalida)
  .should('have.text', 'Largura mínima 8 cm.')
    
    cy.get(el.avisoComprimentoInvalido)
  .should('have.text', 'Comprimento mínimo 13 cm.')
  }

  validarCepInvalido() {
    cy.get(el.msgCepOrigemInvalido)
  .should('have.text', 'CEP de origem inválido.')

  cy.get(el.msgCepDestinoInvalido)
  .should('have.text', 'CEP de destino inválido.')
  }
}

export default new CalculadoraFrete()

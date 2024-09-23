import CalculadoraFrete from '../../pages/calculadoraFrete'

describe('Teste de calculo de frete', () => {

  beforeEach(() => {
    CalculadoraFrete.limparDadosEVisitarPagina()
  })

  it('Calcular frete com os dados validos', () => {
    
    cy.fixture('dadosFrete').then((dados) => {
      const { cepOrigem, cepDestino, dimensoes } = dados.freteValido
      CalculadoraFrete.inserirCepOrigem(cepOrigem)
      CalculadoraFrete.selecionarPeso() 
      CalculadoraFrete.inserirDimensoes(dimensoes.altura, dimensoes.largura, dimensoes.comprimento)
      CalculadoraFrete.inserirCepDestino(cepDestino)
      CalculadoraFrete.calcularFrete()

      CalculadoraFrete.validarFrete()
    })
    
  })

  it('Calcular frete com as dimensoes maiores que o permitido', () => {

    cy.fixture('dadosFrete').then((dados) => {
      const { cepOrigem, cepDestino, dimensoes } = dados.dimensoesMaiores
      CalculadoraFrete.inserirCepOrigem(cepOrigem)
      CalculadoraFrete.selecionarPeso() 
      CalculadoraFrete.inserirDimensoes(dimensoes.altura, dimensoes.largura, dimensoes.comprimento)
      CalculadoraFrete.inserirCepDestino(cepDestino)
      CalculadoraFrete.calcularFrete()

      CalculadoraFrete.validarDimensoesMaiores()
    })
  })

  it('Calcular frete com as dimensoes menores que o permitido', () => {

    cy.fixture('dadosFrete').then((dados) => {
      const { cepOrigem, cepDestino, dimensoes } = dados.dimensoesMenores
      CalculadoraFrete.inserirCepOrigem(cepOrigem)
      CalculadoraFrete.selecionarPeso() 
      CalculadoraFrete.inserirDimensoes(dimensoes.altura, dimensoes.largura, dimensoes.comprimento)
      CalculadoraFrete.inserirCepDestino(cepDestino)
      CalculadoraFrete.calcularFrete()

      CalculadoraFrete.validarDimensoesMenores()
    })
  })

  it('Calcular frete com o cep invalido', () => {
    
    cy.fixture('dadosFrete').then((dados) => {
      const { cepOrigem, cepDestino, dimensoes } = dados.cepInvalido
      CalculadoraFrete.inserirCepOrigem(cepOrigem)
      CalculadoraFrete.selecionarPeso() 
      CalculadoraFrete.inserirDimensoes(dimensoes.altura, dimensoes.largura, dimensoes.comprimento)
      CalculadoraFrete.inserirCepDestino(cepDestino)
      CalculadoraFrete.calcularFrete()

      CalculadoraFrete.validarCepInvalido()
    })
  })
})
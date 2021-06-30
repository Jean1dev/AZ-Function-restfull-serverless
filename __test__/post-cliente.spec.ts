import { Context } from '@azure/functions';
import Function from '../post-cliente'

jest.setTimeout(30000)

describe('post-cliente -> index.ts', () => {

  test('deve cadastar um cliente', async () => {
    const context = {} as Context
    const req = {
      body: {
        nome: 'AUGUSTO',
        cep: 'cep',
        email: 'email',
        observacao: 'observacao'
      }
    }

    await Function(context, req)

    expect(context.res.body).not.toBeNull()
  })

  test('deve lançar uma exception porque o cliente não possui todas as propriedades', async () => {
    const context = {} as Context
    const req = {
      body: {
        nome: 'AUGUSTO_SEGUNDO',
        cep: 'cep',
        observacao: 'observacao'
      }
    }

    try {
      await Function(context, req)
    } catch (error) {
      expect(context.res).toBeUndefined()
      expect(error.message).toBe('Propriedade obrigatorio nao definida')
    }
  })
})

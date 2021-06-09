import Function from '../delete-cliente'
import { create, findOne } from '../shared/cosmos'
import { TABELA_CLIENTE_TEST } from '../shared/contants'
import { Context } from '@azure/functions'

describe('delete-cliente -> index.ts', () => {
  test('deve deletar o cliente', async () => {
    const context = {
      log: jest.fn()
    } as unknown as Context

    const idCliente = await create(TABELA_CLIENTE_TEST, {
      nome: 'carlos',
      email: 'email',
      cep: 'cep',
      observacao: 'obs'
    })

    const req = {
      query: {
        idDocumento: idCliente
      }
    }

    await Function(context, req)
    expect(context.res.status).toBe(204)
  })
})

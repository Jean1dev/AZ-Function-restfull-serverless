import { Context } from '@azure/functions';
import Function from '../get-by-id-cliente'
import { create } from '../shared/cosmos'
import { TABELA_CLIENTE_TEST } from '../shared/contants'

describe('get-by-id-cliente -> index.ts', () => {

  test('deve recuperar o cliente pelo id', async () => {
    const context = {} as Context

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

    expect(context.res.body).toHaveProperty('id')
    expect(context.res.body).toHaveProperty('nome')
    expect(context.res.body).toHaveProperty('email')
    expect(context.res.body).toHaveProperty('cep')
    expect(context.res.body).toHaveProperty('observacao')
    expect(context.res.body.id).toBe(idCliente)
    expect(context.res.body.nome).toBe('carlos')
  })
})

import { Context } from '@azure/functions';
import Function from '../update-cliente'
import { create, findOne } from '../shared/cosmos'
import { TABELA_CLIENTE_TEST } from '../shared/contants';

describe('update-cliente -> index.ts', () => {
  test('deve atualizar um usuario', async () => {
    const contex = {} as Context

    const idCliente = await create(TABELA_CLIENTE_TEST, {
      nome: 'SERJÃO BERRANTERO',
      email: 'email',
      cep: 'cep',
      observacao: 'obs'
    })

    const req = {
      body: {
        id: idCliente,
        nome: 'SERJÃO ALTERADO',
        cep: 'cep',
        observacao: 'observacao'
      }
    }

    await Function(contex, req)

    const { resource: clienteAlterado } = await findOne(TABELA_CLIENTE_TEST, idCliente)
    expect(clienteAlterado.id).toBe(idCliente)
    expect(clienteAlterado.nome).toBe('SERJÃO ALTERADO')
    expect(clienteAlterado.cep).toBe('cep')
    expect(clienteAlterado.observacao).toBe('observacao')
  })
})

import { Context } from '@azure/functions';
import Function from '../get-all-cliente'
import { create, deleteAll } from '../shared/cosmos'
import { TABELA_CLIENTE_TEST } from '../shared/contants'

jest.setTimeout(30000)

describe('get-all-cliente -> index.ts', () => {

  beforeAll(async () => {
    await deleteAll(TABELA_CLIENTE_TEST)
  })

  test('deve retornar uma lista de clientes', async () => {
    const context = {} as Context
    await create(TABELA_CLIENTE_TEST, {
      nome: 'robson',
      email: 'email',
      cep: 'cep',
      observacao: 'obs'
    })

    await create(TABELA_CLIENTE_TEST, {
      nome: 'cleitinho',
      email: 'email',
      cep: 'cep',
      observacao: 'obs'
    })

    await create(TABELA_CLIENTE_TEST, {
      nome: 'mauricinho',
      email: 'email',
      cep: 'cep',
      observacao: 'obs'
    })

    await Function(context, {})

    expect(context.res).not.toBeUndefined()
    context.res.body.forEach(element => {
      expect(element).toHaveProperty('id')
    })

    const items = context.res.body
    const robson = items.filter(item => item.nome === 'robson')
    expect(robson).not.toBeNull()

    const cleitinho = items.filter(item => item.nome === 'cleitinho')
    expect(cleitinho).not.toBeNull()

    const mauricinho = items.filter(item => item.nome === 'mauricinho')
    expect(mauricinho).not.toBeNull()
  })
})

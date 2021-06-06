import { CosmosClient, SqlParameter } from '@azure/cosmos'

export interface IQuery {
  query: string
  parameters?: SqlParameter[]
}

const COSMOS_CONNECTION = ''
const DATABASE_ID = ''

const client = new CosmosClient(COSMOS_CONNECTION)

export const create = async (nomeTabela: string, body: any): Promise<string> => {
  const db = client.database(DATABASE_ID)

  await db.containers.createIfNotExists({ id: nomeTabela })

  const container = db.container(nomeTabela)

  const resultado = await container.items.create(body)
  return resultado.item.id
}

export const findAll = async (nomeTabela: string, { query, parameters }: IQuery) => {
  const container = client.database(DATABASE_ID).container(nomeTabela)

  const { resources } = await container.items.query({
    query,
    parameters
  }).fetchAll()

  return resources
}

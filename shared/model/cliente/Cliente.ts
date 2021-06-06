import { requireNonNull } from '../../utils'

export default class Cliente {
  id: number
  nome: string
  cep: string
  email: string
  observacao: string

  constructor(nome, cep, email, observacao) {
    this.nome = requireNonNull(nome)
    this.cep = requireNonNull(cep)
    this.email = requireNonNull(email)
    this.observacao = requireNonNull(observacao)
  }
}

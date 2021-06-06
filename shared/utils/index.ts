export const requireNonNull = prop => {
  if (!prop)
    throw new Error('Propriedade obrigatorio nao definida')

  return prop
}

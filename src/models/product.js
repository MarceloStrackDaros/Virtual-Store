let nextId = 4

const products = [
  { 
    id: 1,
    type: "celular",
    name: "iPhone 13 Pro",
    brand: "Apple"
  },
  {
    id: 2,
    type: "celular",
    name: "Redmi note 11s",
    brand: "Xiaomi"
  },
  {
    id: 3,
    type: "celular",
    name: "Galaxy S22",
    brand: "Samsung"
  }
]

export const searchProducts = () => {
  return products
}

export const saveNewProduct = (body) => {
  const newProduct = {
    id: proxId,
    ...body
  }

  nextId++
  products.push(newProduct)
  return newProduct.model
}

export const updateProduct = (reqId, body) => {
  const index = products.findIndex((product) => product.id.toString() == reqId)

  if (index === -1) {
    return "Produto não encontrado, verifique o índice!"
  }

  products[index] = {...products[index], ...body}
  return `Produto ${products[index].name} alterado!`
}

export const removeProduct = (reqId) => {
  const index = products.findIndex((product) => product.id.toString() == reqId)

  if (index === -1) {
    return "Produto não encontrado, verifique o índice!"
  }
  
  const deletedProduct = products.splice(index, 1)[0]
  return `Produto ${deletedProduct.name} deletado!`
}
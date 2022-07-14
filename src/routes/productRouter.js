import { Router } from 'express'

const productRouter = new Router()

let produtos = [
  { 
    tipo: "celular",
    modelo: "iPhone 13 Pro",
    marca: "Apple"
  },
  {
    tipo: "celular",
    modelo: "Redmi note 11s",
    marca: "Xiaomi"
  },
  {
    tipo: "celular",
    modelo: "Galaxy S22",
    marca: "Samsung"
  }
]

productRouter.get('/', (req, res) => {
  return res.status(200).send(produtos)
})

productRouter.post('/', (req, res) => {

  console.log(req.body)
  const { tipo, modelo, marca } = req.body

  if (!tipo || !modelo || !marca) {
    return res.status(404).send("Favor preencha todos os campos obrigatórios tipo, modelo e marca")
  }

  produtos.push(req.body)
  return res.status(200).send(`Produto adicionado!`)
})

productRouter.patch('/', (req, res) => {

  let index = produtos.findIndex((produto) => produto.modelo === req.body.modelo)

  if (index === -1) {
    return res.status(404).send("Produto não encontrado, especifique-o pelo modelo")
  }

  produtos[index] = {...produtos[index], ...req.body}
  return res.status(200).send(`Produto ${produtos[index].modelo} alterado!`)
})

productRouter.delete('/', (req, res) => {

  let index = produtos.findIndex((produto) => produto.modelo === req.body.modelo)

  if (index === -1) {
    return res.status(404).send("Produto não encontrado, especifique-o pelo modelo")
  }

  produtos.splice(index, 1)
  return res.status(200).send((`Produto deletado!`))
})

export default productRouter;
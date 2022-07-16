import { Router } from 'express'
import { searchProducts, saveNewProduct, updateProduct, removeProduct } from '../models/product.js'

const productRouter = new Router()

const checkStatus = (productStatus, res) => {
  if (productStatus.startsWith("Produto não encontrado")) {
    return res.status(404).send(productStatus)
  }
  return res.status(200).send(productStatus)
}

productRouter.get('/', (req, res) => {
  return res.status(200).json(searchProducts())
})

productRouter.post('/', (req, res) => {

  const { type, name, brand } = req.body

  if (!type || !name || !brand) {
    return res.status(404).send("Favor preencha todos os campos obrigatórios tipo, modelo e marca")
  }

  let newProduct = saveNewProduct(req.body)
  return res.status(201).send(`Produto ${newProduct} adicionado!`)
})

productRouter.put('/:id', (req, res) => {
  let productStatus = updateProduct(req.params.id, req.body)
  checkStatus(productStatus, res)
})

productRouter.delete('/:id', (req, res) => {
  let productStatus = removeProduct(req.params.id)
  checkStatus(productStatus, res)
})

export default productRouter;
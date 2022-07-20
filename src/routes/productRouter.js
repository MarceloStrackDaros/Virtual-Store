import { Router } from 'express'
import { searchProducts, saveNewProduct, updateProduct, removeProduct } from '../models/product.js'

const productRouter = new Router()

const checkStatus = (productStatus, res) => {
  if (productStatus.startsWith("Produto não encontrado")) {
    return res.status(404).send(productStatus)
  }
  return res.status(200).send(productStatus)
}

productRouter.get('/', async (req, res) => {
  return await res.status(200).json(searchProducts())
})

productRouter.post('/', async (req, res) => {

  const { type, name, brand } = req.body

  if (!type || !name || !brand) {
    return res.status(404).send("Favor preencha todos os campos obrigatórios tipo, modelo e marca")
  }

  let newProduct = await saveNewProduct(type, name, brand)
  return res.status(201).send(`Produto ${newProduct} adicionado!`)
})

productRouter.put('/:id', async (req, res) => {
  const { type, name, brand } = req.body

  if (!type || !name || !brand) {
    return res.status(404).send("Favor preencha todos os campos obrigatórios tipo, modelo e marca")
  }

  const productStatus = await updateProduct(req.params.id, type, name, brand)
  return res.status(200).send(productStatus)
})

productRouter.delete('/', async (req, res) => {
  let productStatus = await removeProduct(req.body)

  if (!req.body.id) {
    return res.status(404).send("Favor informe o ID do produto a ser deletado")
  }

  return res.status(200).send("Produto deletado!")
})

export default productRouter;
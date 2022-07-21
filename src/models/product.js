import mongoose from 'mongoose';

const ProductModel = mongoose.model('Product', {
  name: String,
  type: String,
  brand: String,
  // precoCliente: Number,
  // precoCusto: Number,
});

const products = [
  { 
    type: "celular",
    name: "iPhone 12 mini",
    brand: "Apple"
  },
  {
    type: "celular",
    name: "Redmi note 11s",
    brand: "Xiaomi"
  },
  {
    type: "celular",
    name: "Galaxy S22",
    brand: "Samsung"
  }
]

export const searchOneProduct = async (id) => {
  return await ProductModel.find(id)
}

export const searchProducts = async () => {
  return await ProductModel.find()
}

export const saveNewProduct = async (type, name, brand) => {
  const newProduct = new ProductModel({
    type,
    name,
    brand
  })

  const createdProduct = await newProduct.save()
  return `Produto ${createdProduct.name} criado!`
}

export const updateProduct = async (reqId, type, name, brand) => {
  // const index = products.findIndex((product) => product.id.toString() == reqId)
  const product = await ProductModel.findById(reqId)

  product.name = name
  product.type = type
  product.brand = brand
  
  const modifiedProduct = await product.save()
  return `Produto ${modifiedProduct.name} alterado!`
}

export const removeProduct = async (reqId) => {
  const deletedProduct = await ProductModel.findByIdAndDelete(reqId)
  return `Produto ${deletedProduct.name} deletado!`
}